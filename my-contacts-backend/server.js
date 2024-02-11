const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log("This app listen on port", PORT));