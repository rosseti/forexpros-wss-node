class DataParser 
{
    parse(data) 
    {
        const { message } = JSON.parse(data);
        const messageParts = message.split('::');
        const pid = messageParts[0].split('-')[1];
        const jsonData = JSON.parse(messageParts[1]);
        return { pid, jsonData };
    }
}

module.exports = DataParser;