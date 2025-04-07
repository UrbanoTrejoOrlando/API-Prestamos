const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

const PORT = 4000;

//crear la instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', bookRoutes);

// Agregar la conexion a la base de datos 
connectDB();

app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});