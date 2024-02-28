# ForexPROS Websocket Node (forexpros-wss-node)

This project is a Proof of Concept that performs real-time data reading from investing.com using WebSocket. Currently, it writes the data to a CSV file for later reading. Developed in Javascript with Node.js.

## How to use

To run the project, use the following command:

```
$ node app.js pid (pair_id, accepts 1 or more separated by space)
```

Make sure to replace `(pair_id)` with the desired pair ID. You can provide multiple IDs, separated by space, if desired.

Before running the project, install the requirements using npm or yarn:

```
npm install
```
or
```
yarn install
```

## Accessible Pair IDs:
| Pair ID | Instrument name |
| ------- | --------------- |
| 8984 | Hang Seng Futures |
| 8873 | Dow Jones Industrial Average (DJI) |
| 14958 | NASDAQ Composite |
| 8830 | Gold Futures |
| 945629 | BTC/USD |
| 1058142 | ETC/USD |
| 1138408 | BTC/BRL |
 
For further pair id, hack the websocket in investing.com with some browser debugger, such as Chrome inspect.


## Requirements

- Node.js
- npm or yarn

Make sure you have Node.js installed on your machine. You can install it from the [official Node.js website](https://nodejs.org/).

## Contributing

If you wish to contribute to the project, feel free to open an issue or send a pull request. All contributions are welcome!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).