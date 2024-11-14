const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", require("./api/employeeRouter"))

app.use((req, res, next) => {
  next({
    status: 404,
    message: `The endpoint ${req.method} ${req.originalUrl} doesn't exist.`,
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status ?? 500);
 

  res.send(err.message ?? "Sorry! Something went wrong :(");
});

app.listen(PORT, () => {
 console.log( `Listening on port ${PORT}...`);
});
