class DataPrinter {
    print({ pid, jsonData }) {

        console.log("Recebendo dados: ------------------------------");
        console.log("PID:", pid);
        console.log("Última direção:", jsonData.last_dir);
        console.log("Último valor numérico:", jsonData.last_numeric);
        console.log("Último valor:", jsonData.last);
        console.log("Bid:", jsonData.bid);
        console.log("Ask:", jsonData.ask);
        console.log("High:", jsonData.high);
        console.log("Low:", jsonData.low);
        console.log("Variação percentual:", jsonData.pc);
        console.log("Variação percentual formatada:", jsonData.pcp);
        console.log("Cor da variação:", jsonData.pc_col);
        console.log("Tempo:", jsonData.time);
        console.log("Timestamp:", jsonData.timestamp);
        console.log("--------------------------------");
    }
}

module.exports = DataPrinter;