const express = require("express");
const path = require("path");
const app = express();

app.get("/test", (req, res) => {
  res.send("LOOO");
});

app.use(express.static(path.join(__dirname, "..", "app")));

app.get("*", (_, res) =>
  res.sendFile(path.join(__dirname, "..", "app", "index.html"))
);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
