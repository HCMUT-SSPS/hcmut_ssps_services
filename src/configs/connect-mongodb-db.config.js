import mongoose from "mongoose";


const connectDatabase = async () => {
    try {
        const dbConfig = 'mongodb+srv://admin:P7ESyHqstarKcRUW@hcmut-ssps-staging-db.gfos2xz.mongodb.net/?retryWrites=true&w=majority';
        const connect = await mongoose.connect(dbConfig);
        console.log(`Mongodb: ${connect.connection.host}`);
    } catch (e) {
        console.log("Error connecting database, try again", e);
    }
};

export default connectDatabase;
