import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import connectDB from './db/connection.js';
import authRoutes from './routes/auth.js';
import cctvRoutes from './routes/cctv.js';
import invRoutes from './routes/inventory.js';
import userRoutes from './routes/user.js'
import reqRoutes from './routes/request.js'



const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/cctvs', cctvRoutes);
app.use('/api/invItems', invRoutes);
app.use('/api/users',userRoutes);
app.use('/api/repairLogs',reqRoutes);



app.listen(process.env.PORT, '0.0.0.0', () => {
    connectDB();
    console.log('Server is running on server');
}
)



