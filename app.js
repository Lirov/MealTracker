const express = require("express");
const userRouter = require("./routes/userRoutes");
const mealRouter = require("./routes/mealRoutes");
const app = express();
app.use(express.json());
app.use("/api/v1/meals", mealRouter);
app.use("/api/v1/users", userRouter);
app.all("*", (req, res, next) => {
const error = new Error(`Cannot find ${req.originalUrl} on the server`);
error.status = 404;
return res.status(error.status).json({ error: error.message });
});
module.exports = app;