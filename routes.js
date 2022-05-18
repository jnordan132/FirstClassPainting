const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/Home/index.js"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/About/index.js"));
});

router.get("/residential/exterior", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/ResExterior/index.js"));
});

router.get("/residential/interior", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/ResInterior/index.js"));
});

router.get("/commercial/exterior", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/ComExterior/index.js"));
});

router.get("/commercial/exterior", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/ComInterior/index.js"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/Contact/index.js"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/Home/index.js"));
});

module.exports = router;
