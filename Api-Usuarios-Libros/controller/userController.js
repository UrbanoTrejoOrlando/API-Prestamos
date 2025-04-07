const userServices = require("../services/userServices"); 

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const userData = req.body; 
    const newUser = await userServices.createUser(userData);
    res.status(201).json({
      message: "Usuario creado exitosamente",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  const { userId } = req.params; 
  try {
    const user = await userServices.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  const { userId } = req.params; 
  const userData = req.body; 
  try {
    const updatedUser = await userServices.updateUser(userId, userData); 
    res.status(200).json({
      message: "Usuario actualizado exitosamente",
      user: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  const { userId } = req.params; 
  try {
    const deletedUser = await userServices.deleteUser(userId); 
    res.status(200).json({
      message: "Usuario eliminado exitosamente",
      user: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
