const asyncMqtt = require("async-mqtt");

const client = asyncMqtt.connect("mqtt://localhost:1883", {
    clientId: "durableSubscriber",
    clean: false, // Essential for durable subscriptions
});

client.on("connect", async () => {
    console.log("Connected as a durable subscriber.");

    const topic = "test/topic";
    try {
        await client.subscribe(topic, { qos: 2 });
        console.log(`Subscribed to "${topic}" with QoS 2`);
    } catch (err) {
        console.error("Subscription error:", err);
    }
});

client.on("message", (topic, message) => {
    console.log(`Received message: ${message.toString()} on topic: ${topic}`);
});

client.on("close", () => {
    console.log("Subscriber disconnected.");
});

// Handle graceful shutdown
process.on("SIGINT", async () => {
    await client.end();
});
