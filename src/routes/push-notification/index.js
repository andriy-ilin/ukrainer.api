const app = require("../../util/app");
const Expo = require("exponent-server-sdk");
let expo = new Expo();

app.post("*", async (req, res) => {
  const { message, title, data, tokenDevice } = req.body;
  let receipts = await expo.sendPushNotificationsAsync(
    [
      {
        to: tokenDevice,
        sound: "default",
        body: message,
        title: title,
        data: data
      }
    ],
    expo
  );
  res.json({ receipts });
});

module.exports = app;
