const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", require("./api/employeeRouter"))

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
