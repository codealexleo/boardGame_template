class Board {
    static headery = 50;

    constructor(columns, playerName, oppName, x, y, width, height, bordersize, backimg, diceimg) {
        this.columns = columns;
        this.playerName = playerName;
        this.oppName = oppName;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bordersize = bordersize;
        this.backimg = backimg;
        this.diceimg = diceimg;
        this.dicex = this.diceimg.width / 6;
        this.dicey = this.diceimg.height;
        this.colsize = this.width / (this.columns.length + 1);
        this.rowsize = (this.height - Board.headery) / 2;
        this.dicesize = this.colsize / 3;

    }

    getPlayerColumnAt(x, y) {
        if (y < this.y + Board.headery || y > this.y + Board.headery + this.rowsize)
            return false;
        if (x < this.x + this.colsize || x > this.x + this.width)
            return false;
        let pos = Math.floor((x - this.x) / this.colsize) - 1;
        let column = this.columns[pos];
        return {position: column.position, value: this.columns[pos].valuePlayer};
    }

    update(columns) {
        this.columns = columns;
    }
    draw() {
        image(this.backimg, this.x - this.bordersize, this.y - this.bordersize,
            this.width + this.bordersize * 2, this.height + this.bordersize * 2);
        stroke(100, 200, 100)
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(20);
        strokeWeight(5);
        line(this.x, this.y + Board.headery, this.x + this.width, this.y + Board.headery);
        line(this.x, this.y + Board.headery + this.rowsize, this.x + this.width, this.y + Board.headery + this.rowsize);
        strokeWeight(0);
        text(this.playerName, this.x, this.y + Board.headery,
            this.colsize, this.rowsize);
        text(this.oppName, this.x, this.y + Board.headery + this.rowsize,
            this.colsize, this.rowsize);
        for (let column of this.columns) {
            strokeWeight(5);
            line(this.x + column.position * this.colsize, this.y,
                this.x + column.position * this.colsize, this.y + this.height);
            strokeWeight(0);
            text(column.rule, this.x + column.position * this.colsize, this.y,
                this.colsize, Board.headery);
            if (column.valuePlayer) {
                image(this.diceimg, this.x + column.position * this.colsize + this.dicesize,
                    this.y + Board.headery + (this.rowsize - this.dicesize) / 2,
                    this.dicesize, this.dicesize,
                    this.dicex * (column.valuePlayer - 1), 0, this.dicex, this.dicey);
            }
            if (column.valueOpponent) {
                image(this.diceimg, this.x + column.position * this.colsize + this.dicesize,
                    this.y + Board.headery + this.rowsize + (this.rowsize - this.dicesize) / 2,
                    this.dicesize, this.dicesize,
                    this.dicex * (column.valueOpponent - 1), 0, this.dicex, this.dicey);
            }
        }
    }
}