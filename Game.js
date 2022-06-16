class Game {
    constructor(money) {
        this.stats  = new Statistics();
        this.wallet = new Wallet(money);

        document.getElementById("start").addEventListener('click', this.startGame.bind(this));
        this.myColors = [...document.querySelectorAll("div.color")];
        this.myBid = document.getElementById("bid");
        this.spanWallet = document.querySelector("span.wallet");
        this.spanResult = document.querySelector("span.result");
        this.spanGames = document.querySelector("span.number");
        this.spanWins = document.querySelector("span.win");
        this.spanLosses = document.querySelector("span.loss");

        this.render(money);
    }

    render(money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], colors = ['white', 'white', 'white'],
     wonMoney = 0, bid = 0) {
        this.myColors.forEach((color, index) => {
            color.style.backgroundColor = colors[index];
        });
        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}$`;
        }
        else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];


    }

    startGame() {
        if (this.myBid.value < 1) {
            return alert("Kwota za mała");
        }
        const bid  = Math.floor(this.myBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert("masz za mało środków")
        }

        this.wallet.changeWallet(bid, "-");

        this.draw = new Draw();

        const colors = this.draw.getDrawResults;
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        const currentWallet = this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(currentWallet, win, this.stats.showGameStatistics(), colors,
     wonMoney, bid);
    }
}