class Draw {
    constructor() {
        this.options = ["red", "blue", "green"];
        let _results = this.getDrawResults();
        this.getDrawResults = _results;
    }

    getDrawResults() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random()*this.options.length);
            const color = this.options[index];
            colors.push(color);
        }
        return colors;
    }
}