# Push notification service

## About

Push notification service for Ukrainer react native application which use `exponent-server-sdk` package

## Installation

```
npm install
npm run dev

Server start on http://localhost:1234
```

## API

```javascript
/**
 * Push notification
 * @tokenDevice: string
 * @message: string
 * @data: object
 */
app.post("/push-notification", pushNotification);
```
