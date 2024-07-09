const mqtt = require('mqtt');
const readline = require('readline');

const topic = 'test/topic'; // Topic to publish to

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
  console.log('Publisher connected.');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const publishMessage = () => {
    rl.question('Enter a message to publish: ', (message) => {
      client.publish(topic, message, { qos: 2 }, (err) => {
        if (err) {
          console.error('Publish error:', err);
          return;
        }
        console.log(`Message "${message}" published to "${topic}" with QoS 2`);
      });
      publishMessage(); // Prompt for the next message
    });
  };

  publishMessage(); // Start the input prompt
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log("Closing connection....");
  client.end();
  process.exit(); // Close the readline interface and exit the process
});
