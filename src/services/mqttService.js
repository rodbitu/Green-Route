import mqtt from "mqtt";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

const host = "mqtt://chimpanzee.rmq.cloudamqp.com:1883";

const client = mqtt.connect(host, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
  reconnectPeriod: 1000,
});

const topic = "/green-route/mqtt";

client.on("connect", () => {
  console.log("connected");

  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

client.on("message", (topic, payload) => {
  console.log("Received Message: ", topic, payload.toString());
});

export default client;
