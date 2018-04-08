class Amenaker extends KendaniEak{
    constructor(x, y, index) {
        super(x, y);
        this.multiply = 0;
        this.energy = 10;
        this.speed = Math.round(random(0, 2));
        this.speed2 = this.speed += 1;
        this.index = 6;
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

        return this.directions;
    }

    yntrelVandak(ch, ch1, ch2) {
        var found = [];
        var dire = this.stanalNorKordinatner();

        for (var i in dire) {
            var x = dire[i][0];
            var y = dire[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch || matrix[y][x] == ch1 || matrix[y][x] == ch2) {
                    found.push(dire[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;

            this.x = norVandak[0];
            this.y = norVandak[1];

            matrix[this.y][this.x] = 6;

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
            
            for (var j in gishatichArr) {
                if (norVandak[0] == gishatichArr[j].x && norVandak[1] == gishatichArr[j].y) {
                    gishatichArr.splice(j, 1);
                    break;
                }
            }
        }
    }

    bazmanal () {

        this.index = 6.5;

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
 
            var newAmenaker = new Amenaker(newX, newY, this.index);
            amenakerArr.push(newAmenaker);
            this.multiply = 0;
        }
    }

}