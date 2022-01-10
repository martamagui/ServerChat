class Msg {
  constructor(msgId,userId, text) {
    this.msgId = msgId;
    this.userId = userId;
    this.text = text;
    this.date = new Date();
  }
}
module.exports.Msg = Msg;
