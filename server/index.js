const express = require("express");
const app = express();
const authRouter = require("./handle");
require('./firebaseConfig')
const port = parseInt(process.env.PORT, 10) || 8080;

app.use("/auth", authRouter);

app.listen(port, () => console.log(`Server is ready on ${port}!`));
