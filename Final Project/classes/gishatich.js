class Gishatich extends KendaniEak{
    constructor(x, y) {
        super(x, y);
        this.energy = 2;
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
        this.index = 3;
    }

    stanalNorKordinatner() {
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
    
    sharjvel() {

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;

            this.x = norVandak[0];
            this.y = norVandak[1];

            matrix[this.y][this.x] = 3;

        }

    }

    utel() {
        var norVandak = random(this.yntrelVandak(1));

        if (norVandak >= 2) {

            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;

            for (var j in xotakerArr) {
                if (norVandak[0] == xotakerArr[j].x && norVandak[1] == xotakerArr[j].y) {
                    xotakerArr.splice(j, 1);
                    break;
                }
            }

            for (var j in mardArr) {
                if (norVandak[0] == mardArr[j].x && norVandak[1] == mardArr[j].y) {
                    mardArr.splice(j, 1);
                    break;
                }
            }

            for (var j in shunArr) {
                if (norVandak[0] == shunArr[j].x && norVandak[1] == shunArr[j].y) {
                    shunArr.splice(j, 1);
                    break;
                }
            }

            for (var j in gishatichArr) {
                if (norVandak[0] == gishatichArr[j].x && norVandak[1] == gishatichArr[j].y) {
                    gishatichArr.splice(j, 1);
                    break;
                }
            }
        }
    }

    mah() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var j in shunArr) {
                if (this.x == shunArr[j].x && this.y == shunArr[j].y) {
                    shunArr.splice(j, 1);
                    break;
                }
            }
        }
    }

    bazmanal () {

        this.index = 3.5;

        if (this.index % 2 == 0)  {
            this.index = "igakan"
        }

        this.multiply++;
        var emptyCells = this.yntrelVandak(0);
        var newCell = random(emptyCells);
 
        if(newCell && this.multiply >= 8){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
 
            var newGishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newGishatich);
            this.multiply = 0;
        }
    }

}