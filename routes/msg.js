var express = require("express");
var msgObjetc = require("./Entities/Msg");
var router = express.Router();

let msgList = [];
msgList.push(new msgObjetc.Msg(1, "Hola", "22/12/2021"));
msgList.push(new msgObjetc.Msg(2, "Hola", "22/12/2021"));
msgList.push(new msgObjetc.Msg(3, "Holaaaaa", "22/12/2021"));
msgList.push(new msgObjetc.Msg(4, "Holaaaa", "22/12/2021"));
msgList.push(new msgObjetc.Msg(5, "Holaaaaaaa", "22/12/2021"));
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(msgList);
});

router.post("/", function (req, res, next) {
  const msg = new msgObjetc.Msg(req.body.userId, req.body.msg, req.body.date);
  msgList.push(msg);
  res.send(msgList);
});

module.exports = router;
