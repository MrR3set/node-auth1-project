const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router.js");
const authenticator = require("../auth/authenticator.js");

const server = express();

const sessionCfg = {
    name:"avid",
    secret: process.env.SESSION_SECRET || "valar morghulis",
    resave: false,
    saveUninitialized: process.env.SEND_COOKIES || true,
    cookie:{
        maxAge: 1000 * 60 * 10,
        secure: process.env.USE_SECURE_COOKIES || false,
        httpOnly: true,
    },
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionCfg));

server.use("/api/users",authenticator, userRouter);
server.use("/api/auth", authRouter);

server.get("/",(req,res)=>{
    res.json({msg:"api ok"});
})

module.exports = server;