import express from "express";

const router = express.Router();

// Definir credenciales estáticas
const users = {
  "admin@ups.edu.ec": "admin",
  "client@ups.edu.ec": "client",
};

// Ruta para autenticación de usuarios
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (users[email] && users[email] === password) {
    res.json({ role: email.startsWith("admin") ? "admin" : "client" });
  } else {
    res.status(400).json({ message: "Credenciales incorrectas" });
  }
});

export default router;
