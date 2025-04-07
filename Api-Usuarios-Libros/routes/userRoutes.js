const express = require("express");
const router = express.Router();
const userController = require("../controller/userController"); 

// Crear un nuevo usuario
router.post("/users", userController.createUser);

// Obtener todos los usuarios
router.get("/users", userController.getAllUsers);

// Obtener un usuario por ID
router.get("/users/:userId", userController.getUserById);

// Actualizar un usuario
router.put("/users/:userId", userController.updateUser);

// Eliminar un usuario
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
