const WebSocket = require('ws');
const EventEmitter = require('events');

class WebSocketClient extends EventEmitter {
    constructor(url) {
        super();
        this.ws = new WebSocket(url);
        this.ws.on('error', console.error);
        this.connected = false;
    }

    connect() {
        this.ws.on('open', () => {
            console.log('Connected to WebSocket server');

            this.emit('connect');
        });
    }

    send(data) {
        this.ws.send(data);
    }

    onMessage(callback) {
        this.ws.on('message', (data) => {
            callback(data);
        });
    }
}

module.exports = WebSocketClient;
