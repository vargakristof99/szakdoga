import Users from "../models/user.js"
import bcrypt from "bcrypt"

export default {
    postLogin: async(req,res, next) => {
        const {user, pwd } = req.body;
        const foundUser = await Users.findOne({username: user})
        if(!foundUser) {
            return res.sendStatus(404);
        }

        const passwordMatch = await bcrypt.compare(pwd, foundUser.password);
        if(!passwordMatch) {
            return res.sendStatus(401);

        }

        res.status(200).json({message: "Sikeres Bejelentkezés!"});
    }
}