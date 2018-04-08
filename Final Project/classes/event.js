class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    boom() {
        var norVandak = Math.floor(this.yntrelVandak(1));
        
        if (norVandak >= 2) {
            matrix[norVandak[1]][norVandak[0]] = 7;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var j in grassArr) {
                if (norVandak[0] == grassArr[j].x && norVandak[1] == grassArr[j].y) {
                    grassArr.splice(j, 1);
                    break;
                }
            }
        }
    }
}