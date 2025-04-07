const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    autor: { type: String, required: true, trim: true },
    disponible: { type: Boolean, default: true },
    ISBN: { type: String, required: true, unique: true, trim: true }, 
    fechaPublicacion: { type: Date, required: true }, 
    genero: { type: String, required: true, trim: true }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Libro", libroSchema);
