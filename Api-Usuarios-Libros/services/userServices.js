const User = require("../model/userModel");
const bcrypt = require("bcryptjs"); 

const createUser = async (data) => {
  try {
    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    // Crear el usuario con la contraseña encriptada
    const newUser = new User({
      ...data,
      password: hashedPassword, // Guardamos la contraseña encriptada
    });

    // Guardar el usuario en la base de datos
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error("Error al crear el usuario: " + error.message);
  }
};

// Obtener todos los usuarios
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Error al obtener los usuarios: " + error.message);
  }
};

// Obtener un usuario por ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  } catch (error) {
    throw new Error("Error al obtener el usuario: " + error.message);
  }
};

// Actualizar un usuario
const updateUser = async (userId, data) => {
  try {
    // Si la contraseña está incluida en los datos, encriptarla antes de actualizar
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, data, {
      new: true, // Devuelve el documento actualizado
      runValidators: true, // Aplica las validaciones de esquema
    });

    if (!updatedUser) throw new Error("Usuario no encontrado");
    return updatedUser;
  } catch (error) {
    throw new Error("Error al actualizar el usuario: " + error.message);
  }
};

// Eliminar un usuario
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) throw new Error("Usuario no encontrado");
    return deletedUser;
  } catch (error) {
    throw new Error("Error al eliminar el usuario: " + error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
