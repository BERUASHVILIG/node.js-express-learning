const express = require("express");
const path = require("path");
const multer = require("multer");
const logger = require("morgan");
const router = express.Router();
const upload = multer({ dest: "./public/uploads" });
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));

// Application-Level Middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} ---- Request [${req.method}] --- [${req.url}]`);
  next();
};
app.use(loggerMiddleware);

// Third-party Middleware

app.use(logger("combined"));

// Router-Level Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const fakeAuth = (req, res, next) => {
  const authStatus = true;
  if (authStatus) {
    console.log(`User Auth status  ${authStatus}`);
    next();
  } else {
    res.status(401);
    throw new Error("User is not authorized");
  }
};

const getUsers = (req, res) => {
  res.json({ message: "Get All users" });
};

const createUser = (req, res) => {
  console.log("This is request body received from client", req.body);
  res.json({ message: "Create new user" });
};

router.use(fakeAuth);
router.route("/").get(getUsers).post(createUser);

// Error-handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({ title: "Unauthorized", message: err.message });
      break;
    case 404:
      res.json({ title: "Not Found", message: err.message });
      break;
    case 500:
      res.json({ title: "Server Error", message: err.message });
      break;
    default:
      break;
  }
};

app.post("/upload", upload.single("image"), (req, res, next) => {
  console.log(req.file, req.body);
  res.send(req.file);
  (err, req, res, next) => {
    res.status(400).send({ err: err.message });
  };
});

app.use("/api/users", router);
// app.use("/api/users", router);
app.use(errorHandler);
app.all("*", (req, res) => {
  res.status(404);
  throw new Error("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
