var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../mechs.json"));
  let mcs = JSON.parse(rawdata);
  let mc = mcs.find(element=> element.id == req.query.id);
  res.status(200).json(mc)
});

module.exports = router;
