import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js"
import loginRoutes from "./routes/login.js"

const app = express();
app.use(bodyParser.json());

//ez teszi lehetővé , hogy más URl-ekről kéréseket küldjünk a szervernek
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorozation");
    //a kérést megelőzi egy options(felderitő) üzenet ami azonositja a szerver elérhetőségét
    if(req.method==="OPTIONS") {
        return res.sendStatus(200);

    }
    next();
})
//azonositja a /auth címre érkező kéréseket és átadja őket az authRoutesnak
app.use("/auth", authRoutes);
app.use(loginRoutes);

await mongoose.connect("mongodb+srv://vargakristof:hlfJuGfSothSiTuR@cluster0.dpaitib.mongodb.net/table_tennis?retryWrites=true&w=majority");

app.listen(8000);







