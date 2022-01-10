var express = require("express");
var msgObjetc = require("./Entities/Msg");
var router = express.Router();

let msgList = [];
msgList.push(new msgObjetc.Msg(1,1, "Hola"));
msgList.push(new msgObjetc.Msg(2,2, "Hola"));
msgList.push(new msgObjetc.Msg(3,1, "Holaaaaa"));
msgList.push(new msgObjetc.Msg(4,2, "Holaaaa"));
msgList.push(new msgObjetc.Msg(5,1, "Qué tal?"));
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(msgList);
});

router.post("/", function (req, res, next) {
  const msg = new msgObjetc.Msg(req.body.msgId,req.body.userId, req.body.msg, req.body.date);
  msgList.push(msg);
  //gestor de bd que lo guarde
  //debería devolver un ok, no le listado completo
  res.send(msgList);
});

module.exports = router;
