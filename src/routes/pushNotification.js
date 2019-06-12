import Expo from "exponent-server-sdk";

let expo = new Expo();

/**
 * Push notification
 * @tokenDevice: string
 * @message: string
 * @data: object
 */
async function pushNotification(req, res) {
  const { message, title, data, tokenDevice } = req.body;
  let receipts = await expo.sendPushNotificationsAsync([
    {
      to: tokenDevice,
      sound: "default",
      body: message,
      title: title,
      data: data
    }
  ]);
  res.json({ receipts });
}

export default pushNotification;