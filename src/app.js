import bodyParser from "body-parser";
import express from "express";
import pushNotification from "./routes/pushNotification";
import { PORT } from "../env";

// Init app express
const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json());

/**
 * Push notification
 * @tokenDevice: string
 * @message: string
 * @data: object
 */
app.post("/push-notification", pushNotification);

// Start server
app.listen(PORT || 1235, () => {
  console.log(`Listen http://localhost:${PORT || 1235}`);
});

export default app;
