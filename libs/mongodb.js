import mongoose from "mongoose";

let isConnected;  // Variable to keep track of the connection state

const connectMongoDB = async () => {
    try {
        if (isConnected) {
            console.log("Already connected to MongoDB.");
            return;  // Skip connection if already connected
        }

        const uri = "mongodb+srv://abdisabedada14:MQCLJg5ifpPANowD@cluster0.jkrri.mongodb.net/skill"; 
        if (!uri) {
            throw new Error("MONGODB_URI is not defined");
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true, // These options are default now and not strictly needed
            useUnifiedTopology: true,
        });
        
        isConnected = mongoose.connection.readyState === 1;  // Set the connection state
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("MongoDB connection error:", error); 
    }
};

export default connectMongoDB;  // Export the connection function