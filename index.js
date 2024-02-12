const WebSocket = require('ws');

const ws = new WebSocket('wss://streaming.forexpros.com/echo/726/1mi0f0x1/websocket');

let json_input = {"_event":"bulk-subscribe","tzID":8,"message":"pid-0:%%pid-18750:%%isOpenExch-47:%%pid-18814:%%pid-986421:%%pid-18729:%%pid-1030995:%%pid-18624:%%pid-18820:%%pid-8833:%%isOpenExch-1004:%%pid-8849:%%pid-8832:%%pid-8916:%%pid-8894:%%pid-8830:%%pid-8869:%%pid-40717:%%isOpenExch-85:%%pid-40731:%%pid-40715:%%pid-40725:%%pid-40726:%%pid-40794:%%pid-1090480:%%pid-40719:%%pid-40718:%%pid-40796:%%pid-2103:%%isOpenExch-1001:%%pid-1617:%%pid-1:%%isOpenExch-1002:%%pid-2:%%pid-3:%%pid-39:%%pid-941615:%%pid-996708:%%pid-18812:%%pid-18689:%%pid-18642:%%pid-18617:%%pid-18680:%%pid-18667:%%pid-8873:%%isOpenExch-118:%%pid-8839:%%pid-8874:%%pid-8864:%%pid-1131600:%%pid-1131597:%%pid-1131598:%%pid-1131599:%%pid-8911:%%pid-964528:%%pid-8918:%%pid-8917:%%pid-17920:%%pid-941612:%%pid-1175153:%%isOpenExch-152:%%pid-1175152:%%pid-44336:%%isOpenExch-97:%%pid-1055949:%%pid-8827:%%pid-941614:%%pid-1175151:%%pid-1174944:%%pid-8884:%%pid-8826:%%pid-8853:%%pid-8838:%%pid-8867:%%pid-8858:%%pid-8837:%%pid-8828:%%pid-104396:%%pid-8863:%%pid-8878:%%pid-8859:%%pid-941609:%%isOpenExch-20:%%pid-8984:%%pid-8982:%%isOpenExch-21:%%pid-941616:%%isOpenExch-54:%%pid-44486:%%pid-8824:%%pid-8897:%%pid-8985:%%isOpenExch-46:%%pid-104423:%%pid-8987:%%pid-1167239:%%isOpenExch-19:%%pid-8840:%%isOpenExch-22:%%pid-15288:%%pid-1736:%%pid-1523:%%pid-941613:%%pid-954218:%%isOpenExch-98:%%pid-166:%%isOpenExch-1:%%pid-169:%%pid-178:%%pid-40820:"};

ws.on('error', console.error);

ws.on('open', function () 
{
    ws.send(JSON.stringify(json_input)); 
    ws.send([JSON.stringify({"_event":"UID","UID": 0})]);   
});

const a = (data) => 
{
    const { message } = JSON.parse(data);

    // Acessar os dados desejados do objeto
    const messageParts = message.split('::');
    const pid = messageParts[0].split('-')[1];
    const jsonData = JSON.parse(messageParts[1]);

    const lastDir = jsonData.last_dir;
    const lastNumeric = jsonData.last_numeric;
    const last = jsonData.last;
    const bid = jsonData.bid;
    const ask = jsonData.ask;
    const high = jsonData.high;
    const low = jsonData.low;
    const pc = jsonData.pc;
    const pcp = jsonData.pcp;
    const pcCol = jsonData.pc_col;
    const time = jsonData.time;
    const timestamp = jsonData.timestamp;

    // Imprimir os dados para verificar
    console.log("PID:", pid);
    console.log("Última direção:", lastDir);
    console.log("Último valor numérico:", lastNumeric);
    console.log("Último valor:", last);
    console.log("Bid:", bid);
    console.log("Ask:", ask);
    console.log("High:", high);
    console.log("Low:", low);
    console.log("Variação percentual:", pc);
    console.log("Variação percentual formatada:", pcp);
    console.log("Cor da variação:", pcCol);
    console.log("Tempo:", time);
    console.log("Timestamp:", timestamp);
    console.log("--------------------------------");
}

ws.on('message', function (data) 
{
    if (data != 'o') 
    {
        data = data.toString()
            .replace('a["', 'a("')
            .replace('"]', '")');
        eval(data);
    }
});
