import express from "express";
import authController from "../controller/authController.js";

//létrehozzuk a router-t
const router = express.Router();

//azonosítja a /register címre érkező post metódust
//url-ek prefixálva vannak /auth-tal
router.post("/register", authController.postRegister);
//az ide beérkező kéréseket az registercontroller postRegister metódusa kezeli

export default router;