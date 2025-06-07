# MQTT Testing Project

This project demonstrates a simple MQTT (Message Queuing Telemetry Transport) implementation with a publisher and subscriber pattern. It's designed to help test and understand MQTT messaging concepts.

## Project Structure

```
mqtt-project/
├── README.md           # Project documentation
├── package.json        # Project dependencies and metadata
├── package-lock.json   # Locked versions of dependencies
├── publisher.js        # MQTT publisher implementation
└── subscriber.js       # MQTT subscriber implementation
```

## Dependencies

The project uses the following main libraries:

1. **mqtt (v5.8.0)**
   - Core MQTT client library
   - Used in publisher.js for sending messages
   - Features: QoS levels, connection management, message publishing

2. **async-mqtt (v2.6.3)**
   - Promise-based wrapper for MQTT
   - Used in subscriber.js for receiving messages
   - Features: Async/await support, durable subscriptions

## Components

### 1. Publisher (publisher.js)
- Connects to MQTT broker (default: localhost:1883)
- Publishes messages to topic "test/topic"
- Uses QoS level 2 (exactly-once delivery)
- Interactive command-line interface for message input
- Features:
  - Graceful shutdown handling
  - Error handling for connections
  - Persistent connection management

### 2. Subscriber (subscriber.js)
- Connects to MQTT broker as a durable subscriber
- Subscribes to topic "test/topic"
- Uses QoS level 2 for reliable message delivery
- Features:
  - Durable subscriptions (messages retained if disconnected)
  - Message reception and display
  - Graceful shutdown handling

## Prerequisites

1. **Node.js and npm**
   - Node.js v16.0.0 or higher
   - npm (comes with Node.js)

2. **MQTT Broker**
   - Mosquitto (recommended)
   - Running on localhost:1883 (default)

## Installation

1. **Install Node.js and npm**
   ```bash
   # On macOS using Homebrew
   brew install node
   ```

2. **Install MQTT Broker (Mosquitto)**
   ```bash
   # On macOS using Homebrew
   brew install mosquitto
   brew services start mosquitto
   ```

3. **Install Project Dependencies**
   ```bash
   npm install
   ```

## Running the Project

1. **Start the Subscriber**
   ```bash
   node subscriber.js
   ```
   - This will connect to the MQTT broker
   - Wait for messages on topic "test/topic"

2. **Start the Publisher**
   ```bash
   node publisher.js
   ```
   - This will connect to the MQTT broker
   - Prompt you to enter messages
   - Each message will be published to "test/topic"

3. **Testing**
   - Type messages in the publisher terminal
   - See them appear in the subscriber terminal
   - Press Ctrl+C in either terminal to stop

## MQTT Concepts Used

1. **Topics**
   - Hierarchical structure (test/topic)
   - Used for message routing

2. **QoS Levels**
   - QoS 2: Exactly-once delivery
   - Ensures reliable message delivery

3. **Durable Subscriptions**
   - Messages retained when subscriber is offline
   - Ensures no messages are lost

4. **Connection Management**
   - Automatic reconnection
   - Graceful shutdown handling

## Error Handling

The project includes error handling for:
- Connection failures
- Message publishing errors
- Subscription errors
- Graceful shutdown

## Security Notes

- Default configuration uses localhost
- No authentication in basic setup
- For production use, consider:
  - Adding authentication
  - Using TLS/SSL
  - Implementing proper access control

## Troubleshooting

1. **Connection Issues**
   - Ensure Mosquitto is running
   - Check broker address (default: localhost:1883)
   - Verify network connectivity

2. **Message Not Received**
   - Check topic names match
   - Verify QoS levels
   - Ensure subscriber is running before publisher

## Contributing

Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

## License

ISC License
