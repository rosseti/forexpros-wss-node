const { createObjectCsvWriter } = require('csv-writer');

const csvWriter = createObjectCsvWriter({
    path: 'streaming.csv',
    fieldDelimiter: ';',
    header: [
        { id: 'pid', title: 'PID' },
        { id: 'last', title: 'Last' },
        { id: 'pcp', title: 'PCP' },
        { id: 'color', title: 'Color' }
    ],
});

class CsvWriter {
    async write({ pid, jsonData }) {
        try {
            const newData = { ...jsonData };
            newData.color = newData.pc_col.replace(",", '');
            newData.last = newData.last.replace(",", '');
            await csvWriter.writeRecords([newData]);
        } catch (error) {
            console.error('Error writing data to CSV:', error);
        }
    }
}

module.exports = CsvWriter;