const Loan = require("../model/loanModel");

const URL_USERS = "http://localhost:4000/api/users";
const URL_BOOKS = "http://localhost:4000/api/books";

const createLoan = async (userId, bookId) => {
    try {
        // Validar si el usuario existe en la API de usuarios
        const userResponse = await fetch(`${URL_USERS}/${userId}`);
        if (!userResponse.ok) throw new Error("Usuario no encontrado");

        const bookResponse = await fetch(`${URL_BOOKS}/${bookId}`);
        if (!bookResponse.ok) throw new Error("Libro no encontrado");

        // Convertir la respuesta en JSON
        const bookData = await bookResponse.json();
        console.log("Respuesta de la API de libros:", bookData); 

        if (!bookData.disponible) throw new Error("Libro no disponible");

        // Crear el préstamo
        const newLoan = new Loan({ userId, bookId });
        await newLoan.save();

        return newLoan;
    } catch (error) {
        console.error("Error en createLoan:", error.message); 
        throw new Error(error.message);
    }
};

// Obtener todos los préstamos
const getAllLoans = async () => await Loan.find();

// Obtener un préstamo por ID
const getLoanById = async (id) => await Loan.findById(id);

// Eliminar un préstamo
const deleteLoan = async (id) => await Loan.findByIdAndDelete(id);

// Actualizar un préstamo
const updateLoan = async (id, data) => await Loan.findByIdAndUpdate(id, data, { new: true });

// Obtener los préstamos por un usuario específico
const getLoansByUser = async (userId) => {
    try {
        const loans = await Loan.find({ userId });
        return loans;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Nueva ruta para marcar un préstamo como devuelto
const markLoanAsReturned = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLoan = await loanService.markLoanAsReturned(id);
        res.status(200).json(updatedLoan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { 
    createLoan, 
    getAllLoans, 
    getLoanById, 
    deleteLoan, 
    updateLoan, 
    getLoansByUser,
    markLoanAsReturned
};
