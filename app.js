const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const routes = require("./routes/shoppingRoutes");

app.use(express.json());
app.use("/items", routes);

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

app.use(function (err, res, req, next) {
  debugger;
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
