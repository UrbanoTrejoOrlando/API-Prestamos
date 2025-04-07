const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true, trim: true},
        email: {type: String, required: true, unique: true, lowercase: true, trim: true},
        password: {type: String, required: true,},
        rol: {type: String, enum: ["usuario", "administrador"], default: "usuario" },
        edad: {type: Number, required: true, min: [18, 'La edad mínima es 18']},
        direccion: {type: String, required: true,trim: true}
    },
    {timestamps: true } 
);

module.exports = mongoose.model("User", userSchema);
