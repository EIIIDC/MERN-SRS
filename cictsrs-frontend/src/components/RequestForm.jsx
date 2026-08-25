import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router";
import"../App.css";
import axios from "axios";
import { useRepairLog } from "../db/repairs/repair";
import toast, { Toaster } from "react-hot-toast";
import {useEffect} from "react";



const API_BASE_URL = `https://cict-srs-server.onrender.com`;

const RequestForm = () => {

  const generateNewReqID = () => {
    const today = new Date();
    const month = today.getMonth() + 1; 
    const day = today.getDate();
    const year = today.getFullYear().toString().slice(-2); 

    // Formats as 7-25-26
    const datePrefix = `${year}-${month}${day}`; 
    
 
    const todayCount = parseInt(localStorage.getItem(`reqCount_${datePrefix}`) || '0', 10);
    const newCount = todayCount + 1;

    return {
      fullID: `${datePrefix}-${newCount}`,
      datePrefix: datePrefix,
      newCount: newCount
    };
  };


  const [formData, setFormData] = useState({
    reqID: '',
    name: '',
    email: '',
    office: '',
    device: '',
    serialNumber: '',
    issue: '',
    inclusions: 'none',
    assignedTechnician: '',
    releasedBy: 'TBD',
  });

  const [currentReqMeta, setCurrentReqMeta] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

 
  useEffect(() => {
    const newReqData = generateNewReqID();
    setCurrentReqMeta(newReqData);
    setFormData((prev) => ({ ...prev, reqID: newReqData.fullID }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
     
      const response = await axios.post(`${API_BASE_URL}/api/repairLogs`, formData);
      

   
      setMessage(`Request ${formData.reqID} submitted successfully!`);
      
  
      localStorage.setItem(`reqCount_${currentReqMeta.datePrefix}`, currentReqMeta.newCount);

  
      const nextReqData = generateNewReqID();
      setCurrentReqMeta(nextReqData);


      setFormData({
        reqID: nextReqData.fullID,
        name: '',
        email: '',
        office: '',
        device: '',
        serialNumber: '',
        issue: '',
        inclusions: 'none',
        assignedTechnician: '',
        releasedBy: 'TBD',
      });

    } catch (error) {
      console.error("Submission error:", error);
      

      if (error.response) {
      
        setMessage(`Error: ${error.response.data.message || 'Failed to submit'}`);
      } else {
   
        setMessage('Network error. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Service Request</h2>
      
      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
       
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

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Office</label>      {/* Drop-down select - List of Offices*/}
            <input
              type="text"
              name="office"
              value={formData.office}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="select-none">
            <label className="block text-sm font-medium mb-1 select-none">Technician</label> {/*Drop-down select - J.O's*/}
            <input
              type="text"
              name="assignedTechnician"
              disabled={true}     
              value= "TO BE ASSIGNED"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

    
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

   
        <div>
          <label className="block text-sm font-medium mb-1">Inclusions (e.g., Charger, Bag)</label>
          <input
            type="text"
            name="inclusions"
            value={formData.inclusions}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

     
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition disabled:bg-blue-300 mt-4"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default RequestForm;