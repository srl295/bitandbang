const data = require('./data.json');

class Card {
    /**
     * Return card data
     */
    get data() {
        return data;
    }
}

module.exports = Card;
