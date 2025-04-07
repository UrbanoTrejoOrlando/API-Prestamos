const express = require("express");
const {connectDB} = require("./data/config");
const loanRoutes = require("./routes/loanRoutes");
const app = express();
const PORT = 4001;

app.use(express.json());
app.use("/loans", loanRoutes);

connectDB();

app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});