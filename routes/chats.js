var express = require('express');
var msgObjetc = require('./Entities/Chats');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('chats');
});

module.exports = router;
