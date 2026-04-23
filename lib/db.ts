import mongoose from "mongoose";

const MONGO_DB = process.env.MONGO_DB;

const connect = async() => {
    const connectionState = mongoose.connection.readyState;

    if(connectionState == 1){
        console.log("Already Connected");
        return;
    }

    if(connectionState == 2){
        console.log("Connecting....");
        return;
    }

    try{
        mongoose.connect(MONGO_DB!,{
            dbName:"Demo",
            bufferCommands:true
        });
        console.log("Connected");
    }catch(err){
        console.log("Error:",err);
    }
}

export default connect;