const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.get("/brute-dir", (req, res) => {
  res.send("Lakukan brute force disetiap direktori yang anda temukan");
});
app.get("/brute-dir/admin", (req, res) => {
  res.send("This is not it");
});

app.get("/brute-dir/admin/advertise", (req, res) => {
  res.send("This is still not it");
});

app.get("/brute-dir/admin/advertise/photo", (req, res) => {
  res.send("Cyco{Bru73-d1R3c70ry}");
});

app.get("/brute-dir/users", (req, res) => {
  res.send("This is not it either");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/brute-dir`);
});
