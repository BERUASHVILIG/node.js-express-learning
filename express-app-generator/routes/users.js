var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("user", {
    title: "Users page",
    message: "Users listed",
  });
});

module.exports = router;
