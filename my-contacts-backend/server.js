const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5001;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => console.log("This app listen on port", PORT));
