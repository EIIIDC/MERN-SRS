
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const API_BASE_URL = `https://cict-srs-server.onrender.com`;

const EditRequestForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    reqID: '',
    name: '',
    email: '',
    office: '',
    device: '',
    serialNumber: '',
    issue: '',
    inclusions: '',
    assignedTechnician: '',
    status: '',
    releasedBy: '',
  });

 
  const [originalData, setOriginalData] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  const [availableTechnicians, setAvailableTechnicians] = useState([]);
  
  const [allTechnicians, setAllTechnicians] = useState([]);


  useEffect(() => {
    const fetchRepairLog = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/repairLogs/${id}`);
        const data = response.data.data || response.data; 
        
        const initialFormState = {
          reqID: data.reqID || '',
          name: data.name || '',
          email: data.email || '',
          office: data.office || '',
          device: data.device || '',
          serialNumber: data.serialNumber || '',
          issue: data.issue || '',
          inclusions: data.inclusions || '',
          assignedTechnician: data.assignedTechnician || '',
          status: data.status || 'operational',
          releasedBy: data.releasedBy || '',
        };

        setFormData(initialFormState);
        
       
        setOriginalData({
            assignedTechnician: initialFormState.assignedTechnician,
            status: initialFormState.status
        });

      } catch (error) {
        console.error("Error fetching log:", error);
        setMessage("Failed to load data. The record might not exist.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepairLog();
  }, [id]);

  // Fetch all technicians
  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/technician`);
        const allTechs = response.data.data || response.data;
        
        setAllTechnicians(allTechs); 

        
        const available = allTechs.filter(tech => tech.isOccupied === false);
        setAvailableTechnicians(available);
      } catch (error) {
        console.error("Error fetching technicians:", error);
      }
    };

    fetchTechnicians();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const changeTechnicianStatus = async (techName, isOccupiedStatus) => {
    if (!techName) return;
    const tech = allTechnicians.find(t => t.Fname === techName);
    if (tech) {
      const techId = tech._id || tech._id;
      await axios.put(`${API_BASE_URL}/api/technician/${techId}`, { isOccupied: true });
    }};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
     
      await axios.put(`${API_BASE_URL}/api/repairLogs/${id}`, formData);

      const prevTechName = originalData?.assignedTechnician;
      const newTechName = formData.assignedTechnician;
      const prevStatus = originalData?.status;
      const newStatus = formData.status;

     
      const updateTechStatus = async (techName, isOccupiedStatus) => {
          if (!techName) return;
          const tech = allTechnicians.find(t => t.Fname === techName);
          if (tech) {
              const techId = tech._id || tech._id;
             
              await axios.put(`${API_BASE_URL}/api/technician/${techId}`, { isOccupied: isOccupiedStatus });
          }
      };

     
      if (newStatus === 'completed') {
        
          await updateTechStatus(newTechName, false);
          if (prevTechName && prevTechName !== newTechName) {
              await updateTechStatus(prevTechName, false); // Edge case: swapped tech AND completed at same time
          }
      } else {
         
          if (newTechName !== prevTechName) {
            
              await updateTechStatus(prevTechName, false);
              await updateTechStatus(newTechName, true);
          } else if (prevStatus === 'completed' && newStatus !== 'completed') {
             
              await updateTechStatus(newTechName, true);
          }
      }

      setMessage("Request updated successfully!");
      setTimeout(() => navigate('/superadmin/manage'), 1500); 
    } catch (error) {
      console.error("Update error:", error);
      setMessage(`Error: ${error.response?.data?.message || 'Failed to update'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="text-center mt-20">Loading Data</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Service Request</h2>
      
      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ReqID*/}
        <div className="bg-gray-50 p-3 rounded border border-gray-200">
          <label className="block text-sm font-bold text-gray-600 mb-1">Request Tracking ID</label>
          <input
            type="text"
            name="reqID"
            value={formData.reqID}
            readOnly
            className="w-full bg-transparent border-none text-lg font-mono text-blue-600 focus:ring-0 cursor-not-allowed"
          />
        </div>

        {/* name*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
        {/*email*/}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Office*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Office</label>
            <input
              type="text"
              name="office"
              value={formData.office}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assigned Technician */}
          <div>
            <label className="block text-sm font-medium mb-1">Assigned Technician</label>
            <select
              name="assignedTechnician"
              value={formData.assignedTechnician}
              onChange={ [handleChange,changeTechnicianStatus] }
              
              
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="" disabled>Select a Technician</option>
              
              
              {formData.assignedTechnician && !availableTechnicians.some(tech => tech.Fname === formData.assignedTechnician) && (
                <option value={formData.assignedTechnician}>
                  {formData.assignedTechnician} (Current),

                 
                </option>
                 
              )}

             {/* Map Tech*/}
              {availableTechnicians.map((tech) => (
                <option key={tech._id || tech.id} value={tech.Fname}>
                  {tech.Fname}
                  
                </option>
                
              ))}

               
            </select>
          </div>
        </div>

        {/* Status*/}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="received">Received</option>
          </select>
        </div>

        {/* Device*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Device Name/Model</label>
            <input
              type="text"
              name="device"
              value={formData.device}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* SN*/}
          <div>
            <label className="block text-sm font-medium mb-1">Serial Number</label>
            <input
              type="text"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Issue */}
        <div>
          <label className="block text-sm font-medium mb-1">Reported Issue</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            rows="3"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition disabled:bg-blue-300 mt-4"
        >
          
          {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default EditRequestForm;