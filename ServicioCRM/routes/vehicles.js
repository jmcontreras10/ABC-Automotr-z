var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require('fs');


/* GET vehicles listing. */
router.get('/', (req, res, next) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../vehicles.json"));
  let vehicles = JSON.parse(rawdata);
  let vehicle = vehicles.find(element=> element.id == req.query.id);
  res.status(200).json(vehicle)
});

module.exports = router;
