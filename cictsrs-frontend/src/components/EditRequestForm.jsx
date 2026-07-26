import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router";
import axios from "axios";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Fetch the existing data when the component loads
  useEffect(() => {
    const fetchRepairLog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/repairLogs/${id}`);
        // Assuming your backend returns the object directly or inside a data property
        const data = response.data.data || response.data; 
        
        // Populate the form with the existing data
        setFormData({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Use PUT or PATCH to update the existing record
      await axios.put(`http://localhost:3000/api/repairLogs/${id}`, formData);
      setMessage("Request updated successfully!");
      
      // Optional: Redirect back to the list after a short delay
      setTimeout(() => navigate('/superadmin/manage'), 1500); 
    } catch (error) {
      console.error("Update error:", error);
      setMessage(`Error: ${error.response?.data?.message || 'Failed to update'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="text-center mt-20">Loading data...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Service Request</h2>
      
      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Read-only reqID display */}
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

        {/* Row 1: Name & Email */}
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

        {/* Row 2: Office & Assigned Technician */}
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
          <div>
            <label className="block text-sm font-medium mb-1">Assigned Technician</label>
            <input
              type="text"
              name="assignedTechnician"
              value={formData.assignedTechnician}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Status Dropdown (New feature useful for edits) */}
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

        {/* Device & Serial Number */}
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