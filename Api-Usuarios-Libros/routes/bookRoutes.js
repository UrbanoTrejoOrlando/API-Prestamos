const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController"); 


// Crear un nuevo libro
router.post("/books", bookController.createBook);

// Obtener todos los libros
router.get("/books", bookController.getAllBooks);

// Obtener un libro por ID
router.get("/books/:bookId", bookController.getBookById);

// Actualizar un libro
router.put("/books/:bookId", bookController.updateBook);

// Eliminar un libro
router.delete("/books/:bookId", bookController.deleteBook);

module.exports = router;
