var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../scs.json"));
  let scs = JSON.parse(rawdata);
  let sc = scs.find(element=> element.id == req.query.id);
  res.status(200).json(sc)
});

module.exports = router;
