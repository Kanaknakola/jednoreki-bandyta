class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics(win, bid) {
        let gameResults = {
            win: win,
            bid: bid
        }
        this.gameResults.push(gameResults);
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let loss = this.gameResults.filter(result => !result.win).length;
        return [games, wins, loss];
    }
}