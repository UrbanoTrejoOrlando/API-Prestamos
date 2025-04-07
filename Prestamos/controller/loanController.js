
const loanService = require("../services/loanServices");

// Crear un prestamo
const createLoan = async (req, res) => {
    try {
        const { userId, bookId } = req.body;
        const newLoan = await loanService.createLoan(userId, bookId);
        res.status(201).json(newLoan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Obtener todos los prestamos
const getAllLoans = async (req, res) => {
    try {
        const loans = await loanService.getAllLoans();
        res.status(200).json(loans);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un prestamo por su id
const getLoanById = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await loanService.getLoanById(id);
        res.status(200).json(loan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Eliminacion de un prestamo
const deleteLoan = async (req, res) => {
    try {
        const { id } = req.params;
        await loanService.deleteLoan(id);
        res.status(200).json({ message: "Préstamo eliminado" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Actualizar un prestamo
const updateLoan = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLoan = await loanService.updateLoan(id, req.body);
        res.status(200).json(updatedLoan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener el historial de prestamos por usuario
const getLoansByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const loans = await loanService.getLoansByUser(userId);
        res.status(200).json(loans);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Marcar un prestamo como devuelto
const markLoanAsReturned = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLoan = await loanService.markLoanAsReturned(id);
        res.status(200).json({ message: "Libro devuelto con éxito", updatedLoan });
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