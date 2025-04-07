const Libro = require("../model/bookModel"); 

// Crear un nuevo libro
const createBook = async (data) => {
  try {
    // Crear el libro
    const newBook = new Libro(data);
    
    // Guardar el libro en la base de datos
    await newBook.save();
    return newBook;
  } catch (error) {
    throw new Error("Error al crear el libro: " + error.message);
  }
};

// Obtener todos los libros
const getAllBooks = async () => {
  try {
    const books = await Libro.find();
    return books;
  } catch (error) {
    throw new Error("Error al obtener los libros: " + error.message);
  }
};

// Obtener un libro por ID
const getBookById = async (bookId) => {
  try {
    const book = await Libro.findById(bookId);
    if (!book) throw new Error("Libro no encontrado");
    return book;
  } catch (error) {
    throw new Error("Error al obtener el libro: " + error.message);
  }
};

// Actualizar un libro
const updateBook = async (bookId, data) => {
  try {
    const updatedBook = await Libro.findByIdAndUpdate(bookId, data, {
      new: true, // Devuelve el documento actualizado
      runValidators: true, // Aplica las validaciones de esquema
    });

    if (!updatedBook) throw new Error("Libro no encontrado");
    return updatedBook;
  } catch (error) {
    throw new Error("Error al actualizar el libro: " + error.message);
  }
};

// Eliminar un libro
const deleteBook = async (bookId) => {
  try {
    const deletedBook = await Libro.findByIdAndDelete(bookId);
    if (!deletedBook) throw new Error("Libro no encontrado");
    return deletedBook;
  } catch (error) {
    throw new Error("Error al eliminar el libro: " + error.message);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
