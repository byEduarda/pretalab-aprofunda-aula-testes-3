import express from 'express';
import { userRoutes } from '../../app/controllers/routes/user.routes';
import { connectMongo } from '../database/mongooseConnection';
const app = express();
app.use(express.json()); 

app.use('/users', userRoutes); 

const URI = process.env.MONGO_URI;

if(!URI){
    throw new Error('a variavel não está definida')
}

connectMongo(URI)

export default app;
