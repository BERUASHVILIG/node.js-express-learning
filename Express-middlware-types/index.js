const express = require("express");
const router = express.Router();
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Application-Level Middleware

const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} ---- Request [${req.method}] --- [${req.url}]`);
  next();
};
app.use(loggerMiddleware);
// Third party Middleware
// Router-Level Middleware

app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
  const authStatus = false;
  if (authStatus) {
    console.log(`User Auth status  ${authStatus}`);
    next();
  } else {
    res.status(401);
    throw new Error("User is not auhtorized");
  }
};

const getUsers = (req, res) => {
  res.json({ message: "Get All users" });
};
const createUser = (req, res) => {
  res.json({ message: "Create new user" });
};

router.use(fakeAuth);
router.route("/").get(getUsers).post(createUser);

// Built-in Middleware
// Error-handling middleware

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
