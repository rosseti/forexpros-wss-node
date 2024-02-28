class DataPrinter {
    print({ pid, jsonData }) {
        console.log("Receiving data: ------------------------------");
        console.log("PID:", pid);
        console.log("Last direction:", jsonData.last_dir);
        console.log("Last numeric value:", jsonData.last_numeric);
        console.log("Last value:", jsonData.last);
        console.log("Bid:", jsonData.bid);
        console.log("Ask:", jsonData.ask);
        console.log("High:", jsonData.high);
        console.log("Low:", jsonData.low);
        console.log("Percentage change:", jsonData.pc);
        console.log("Formatted percentage change:", jsonData.pcp);
        console.log("Change color:", jsonData.pc_col);
        console.log("Time:", jsonData.time);
        console.log("Timestamp:", jsonData.timestamp);
        console.log("--------------------------------");
    }
}

module.exports = DataPrinter;