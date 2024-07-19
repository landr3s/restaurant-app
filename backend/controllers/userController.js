import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }
    res.json({ email: user.email, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};
