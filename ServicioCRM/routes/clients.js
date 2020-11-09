var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require('fs');


/* GET users listing. */
router.get('/', (req, res, next) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../clients.json"));
  let clients = JSON.parse(rawdata);
  let client = clients.find(element=> element.id == req.query.id);
  res.status(200).json(client)
});

module.exports = router;
