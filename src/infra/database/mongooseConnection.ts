import mongoose from "mongoose";

export async function connectMongo(uri:string) {
    try{
        await mongoose.connect(uri);
        console.log('Mongo Atlas conectado');
    }catch(e){
        console.error('Falha na conexão mongo', e);
        process.exit(1);
    } 
}