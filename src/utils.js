export default {

    getRelevantStocks: (stocks) => {
        stocks = stocks.slice(0, 9);
        stocks.sort((a, b) => (a.label.toLowerCase() > b.label.toLowerCase()) ? 1 : -1);
        return stocks;
    },

    fixUid: (uid) => {
        if (uid.length > 8) {
            return `${uid.substring(0, 8)}...`;
        }

        return uid;
    },

}