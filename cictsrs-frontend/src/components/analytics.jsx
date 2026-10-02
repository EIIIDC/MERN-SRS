import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';

const API_BASE_URL = `https://cict-srs-server.onrender.com`;

const columns = [
  { field: 'reqID', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: false },
  { field: 'office', headerName: 'Office', width: 150, editable: false },
  { field: 'serialNumber', headerName: 'Serial Number', width: 250, editable: false },
  { field: 'dateReceived', headerName: 'Date Received', width: 250, editable: false },
  { field: 'updatedAt', headerName: 'Date Released', width: 250, editable: false },
  { field: 'assignedTechnician', headerName: 'Technician', width: 150, editable: false },
];

export default function DataGridRepairLogs() {
  // 1. Move state variables inside the component rendering the Grid
  const [repairLogs, setRepairLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data when the component mounts
  useEffect(() => {
    const getRepairLogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/repairLogs`);
        const actualData = response.data.data || response.data;

        if (Array.isArray(actualData)) {
          setRepairLogs(actualData);
        } else {
          console.error("Backend did not return an array:", actualData);
          setRepairLogs([]);
        }
      } catch (error) {
        console.error("Failed to fetch Repair Logs from server:", error);
        setRepairLogs([]);
      } finally {
        // Use finally block to ensure loading stops whether successful or not
        setLoading(false);
      }
    };

    getRepairLogs();
  }, []);

  return (
    <div className="w-full transition-all transition-discrete">
      <Box sx={{ height: { xs: 800, md: 600, lg: 400 }, width: { xs: 280, md: 800, lg: 1650 } }}>
        <DataGrid
          // 3. Pass your fetched state directly to the rows prop
          rows={repairLogs}
          columns={columns}
          
          // 4. CRITICAL FIX: DataGrid requires a unique 'id' field for every row.
          // Since you are likely pulling from MongoDB, your unique ID is probably '_id', 
          // or according to your columns, 'reqID'. Tell DataGrid which field to use:
          getRowId={(row) =>  row._id}
          
          // 5. BONUS: Pass your loading state to DataGrid to show a built-in spinner!
          loading={loading}
          
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}