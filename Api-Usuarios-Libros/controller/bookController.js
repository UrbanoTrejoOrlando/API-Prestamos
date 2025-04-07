const bookServices = require("../services/bookServices");

// Crear un nuevo libro
const createBook = async (req, res) => {
  try {
    const bookData = req.body; 
    const newBook = await bookServices.createBook(bookData); 
    res.status(201).json({
      message: "Libro creado exitosamente",
      book: newBook,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Obtener todos los libros
const getAllBooks = async (req, res) => {
  try {
    const books = await bookServices.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Obtener un libro por ID
const getBookById = async (req, res) => {
  const { bookId } = req.params; 
  try {
    const book = await bookServices.getBookById(bookId); 
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Actualizar un libro
const updateBook = async (req, res) => {
  const { bookId } = req.params; 
  const bookData = req.body; 
  try {
    const updatedBook = await bookServices.updateBook(bookId, bookData); 
    res.status(200).json({
      message: "Libro actualizado exitosamente",
      book: updatedBook,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Eliminar un libro
const deleteBook = async (req, res) => {
  const { bookId } = req.params; 
  try {
    const deletedBook = await bookServices.deleteBook(bookId); 
    res.status(200).json({
      message: "Libro eliminado exitosamente",
      book: deletedBook,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
