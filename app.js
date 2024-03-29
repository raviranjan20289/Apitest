require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

const cors = require("cors");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

require("./db/connect");

app.use(express.json());

const userRouter = require("./routes/user.routes");

const registerRouter = require("./routes/register.routes");

app.use("/api/v1", userRouter);
app.use("/api/v2", registerRouter);

app.listen(port, () => {
  console.log(`you are listen on port ${port}`);
});
