# MQTT Testing Project

A simple demonstration of MQTT (Message Queuing Telemetry Transport) protocol using Node.js with publisher-subscriber messaging pattern.

## What is MQTT?

MQTT is a lightweight messaging protocol for IoT devices and real-time applications. It uses a publish-subscribe model where:
- **Publishers** send messages to topics
- **Subscribers** receive messages from topics they're interested in
- A **broker** routes messages between publishers and subscribers

## Project Structure

```
mqtt-project/
├── README.md           # Project documentation
├── package.json        # Dependencies
├── publisher.js        # Sends messages
└── subscriber.js       # Receives messages
```

## Prerequisites

### Node.js (Required)
```bash
# On macOS using Homebrew
brew install node

# Verify installation
node --version
npm --version
```

### MQTT Broker - Mosquitto (Required)
```bash
# On macOS using Homebrew
brew install mosquitto

# Start the broker
brew services start mosquitto

# Verify it's running
brew services list | grep mosquitto
```

## Installation

1. **Install project dependencies:**
```bash
npm install
```

2. **Verify MQTT broker is running:**
```bash
mosquitto_pub -h localhost -t test/topic -m "test"
```

## How to Run

### Step 1: Start the Subscriber
Open terminal and run:
```bash
node subscriber.js
```
**Expected output:**
```
Connected as a durable subscriber.
Subscribed to "test/topic" with QoS 2
```

### Step 2: Start the Publisher
Open another terminal and run:
```bash
node publisher.js
```
**Expected output:**
```
Publisher connected.
Enter a message to publish:
```

### Step 3: Test Communication
1. Type a message in the publisher terminal and press Enter
2. See the message appear in the subscriber terminal
3. Press `Ctrl+C` to stop either program

**Example:**
```
# Publisher Terminal
Enter a message to publish: Hello MQTT!
Message "Hello MQTT!" published to "test/topic" with QoS 2

# Subscriber Terminal
Received message: Hello MQTT! on topic: test/topic
```

## Understanding the Code

### Publisher (`publisher.js`)
- Connects to MQTT broker on localhost:1883
- Publishes messages to "test/topic"
- Uses QoS 2 (reliable delivery)
- Interactive command-line interface

### Subscriber (`subscriber.js`)
- Connects as durable subscriber (messages saved when offline)
- Listens to "test/topic"
- Uses QoS 2 (reliable delivery)
- Displays received messages

## Key MQTT Concepts

### Topics
- Message routing paths (like "test/topic")
- Hierarchical structure separated by "/"

### QoS Levels
- **QoS 0**: Fire and forget (may lose messages)
- **QoS 1**: At least once (may duplicate)
- **QoS 2**: Exactly once (used in this project - most reliable)

### Durable Subscriptions
- Messages are saved when subscriber is offline
- No message loss during disconnections

## Troubleshooting

### Connection Issues
```bash
# Check if Mosquitto is running
brew services list | grep mosquitto

# Start if not running
brew services start mosquitto

# Test broker
mosquitto_pub -h localhost -t test/topic -m "test message"
```

### Messages Not Received
- Start subscriber before publisher
- Check topic names match exactly
- Verify broker is running

### Port Issues
```bash
# Check what's using port 1883
lsof -i :1883

# Kill process if needed
kill -9 <PID>
```

## Dependencies

- **mqtt@^5.8.0**: Core MQTT client library
- **async-mqtt@^2.6.3**: Promise-based MQTT wrapper

## License

ISC License
