const WebSocketClient = require('./src/websocket/WebSocketClient');
const DataParser = require('./src/parser/DataParser');
const DataPrinter = require('./src/printer/DataPrinter');
const CsvWriter = require('./src/writer/CsvWriter');

const args = process.argv.slice(2);
const pidString = args.map(pid => `%%pid-${pid}:`).join('');
const inputString = `{"_event":"bulk-subscribe","tzID":8,"message":"pid-0:${pidString}"}`;

const ws = new WebSocketClient('wss://streaming.forexpros.com/echo/726/1mi0f0x1/websocket');
const dataParser = new DataParser();
const dataPrinter = new DataPrinter();
const csvWriter = new CsvWriter();

ws.connect();
ws.on('connect', () => {
    ws.send(inputString);

    const sendHeartbeat = () => {
        ws.send(JSON.stringify({
            _event: 'heartbeat',
            data: 'h'
        }));
    }

    setInterval(sendHeartbeat, 5000);
});

ws.onMessage((data) => {
    if (data.toString() != 'o' && data.toString().includes('message')) {
        data = JSON.parse(data.toString().replace('a["', '["'));

        const parsedData = dataParser.parse(data);
        dataPrinter.print(parsedData);
        csvWriter.write(parsedData);
    }
});