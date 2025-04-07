// routes/loanRoutes.js
const express = require("express");
const router = express.Router();
const loanController = require("../controller/loanController");

router.post("/", loanController.createLoan);
router.get("/", loanController.getAllLoans);
router.get("/:id", loanController.getLoanById);
router.put("/:id", loanController.updateLoan);
router.delete("/:id", loanController.deleteLoan);

//Obtener el historial de prestamos por usuario
router.get("/user/:userId", loanController.getLoansByUser);

// Marcar un prestamo como devuelto
router.put("/:id/return", loanController.markLoanAsReturned);


module.exports = router;