import Box from '@mui/material/Box';
import axios from "axios";
import {DataGrid} from '@mui/x-data-grid';





const API_BASE_URL = `https://cict-srs-server.onrender.com`;

const RepairLogCard = () => {
  const [repairLogs, setRepairLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getRepairLogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/repairLogs`);

        const actualData = response.data.data || response.data;

        if (Array.isArray(actualData)) {
          setRepairLogs(actualData);

        } else {
          console.error(
            "Backend did not return an array. It returned:",
            actualData,
          );
          setRepairLogs([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Repair Logs from server:", error);
        setRepairLogs([]);
        setLoading(false);
      }
    };

    getRepairLogs();
  }, []);
}


{/* Data Grid format_Columns*/}
const columns = [
     { field: 'reqID', headerName: 'ID', width: 90 },
    {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  }, {
    field: 'office',
    headerName: 'Office',
    width: 150,
    editable: false,
  }, {
    field: 'serialNumber',
    headerName: 'Serial Number',
    width: 250,
    editable: false,
  }, {
    field: 'dateReceived',
    headerName: 'Date Received',
    width: 250,
    editable: false,
  }, {
    field: 'updatedAt',
    headerName: 'Date Released',
    width: 250,
    editable: false,
  }, {
    field: 'assignedTechnician',
    headerName: 'Technician',
    width: 150,
    editable: false,
  }, 
];

{/* MONGO HATAK */}
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];





export default function DataGridRepairLogs() {
  return (

<div className="w-full transition-all transition-discrete">

    <Box  sx={{ height:{xs:800, md:600, lg:400}, 
                width:{xs:280, md:800, lg:1650} }} >
      <DataGrid 
        rows={rows}
        columns={columns}
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