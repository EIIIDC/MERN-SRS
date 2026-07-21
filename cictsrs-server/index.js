import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import connectDB from './db/connection.js';
import authRoutes from './routes/auth.js';
import cctvRoutes from './routes/cctv.js';



const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/cctvs', cctvRoutes);


app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is running on server');
}
)



