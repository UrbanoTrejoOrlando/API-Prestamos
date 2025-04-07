const mongoose = require("mongoose");
const connectDB = async()=>{
    const URL = "mongodb://prestamo:prestamo4321@localhost:27020/";
    try {
        await mongoose.connect(URL);
        console.log("Database Running");
        
        }catch(error){
            console.error("Cant connect to database");
            console.error(error);

    }
    
}
module.exports = {connectDB};