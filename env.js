require("dotenv").config();
// install and learn dotenv package which help to pick env variables from .env file
// also if we don't use this "require("dotenv").config()" we can do same from terminal "node -r dotenv/config env.js"
console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log(process.env.COURSE);
