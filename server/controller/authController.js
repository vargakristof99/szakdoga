import Users from "../models/user.js"
import bcrypt from "bcrypt"

export default {
    postRegister: async(req, res, next) => {
        const {user, pwd} = req.body;
        const userExists = await Users.findOne({username: user});
        if(userExists) {
            return res.status(400).json({message: "User already exists!"});
        }
        const hashedPwd = await bcrypt.hash(pwd, 8);
        const roles = await Users.count()==0?[5150,2001,1984]:[2001];
        await Users.create({username: user, password: hashedPwd, roles});
        res.status(200).json({message: "Sikeres!"});
    } 

}