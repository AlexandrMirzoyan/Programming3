class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

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

        this.multiply = 0;

    }

    bazmanal() {

        this.multiply++;

        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 2 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
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

}


class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = 2;
        this.multiply = 1;
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

    yntrelVandak(ch) {
        //this.stanalNorKordinatner();
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

    sharjvel() {

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;

            this.x = norVandak[0];
            this.y = norVandak[1];

            matrix[this.y][this.x] = 2;

        }

    }

    utel() {

        var norVandak = random(this.yntrelVandak(1));
        this.multiply++;

        if (norVandak && this.multiply >= 2) {

            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;

            for (var j in grassArr) {
                if (norVandak[0] == grassArr[j].x && norVandak[1] == grassArr[j].y) {
                    this.multiply = 0;
                    grassArr.splice(j, 1);
                    break;
                }
            }
        }

    }

    mah() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var j in xotakerArr) {
                if (this.x == xotakerArr[j].x && this.y == xotakerArr[j].y) {
                    xotakerArr.splice(j, 1);
                    break;
                }
            }
        }
    }

}


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //this.multiply = 1;
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

}

class Shun {
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
        this.index = 4;
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

    sharjvel() {

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;

            this.x = norVandak[0];
            this.y = norVandak[1];

            matrix[this.y][this.x] = 4;

        }

    }

    utel() {

        var norVandak = random(this.yntrelVandak(3));

        if (norVandak && this.multiply >= 2) {

            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;

            for (var j in gishatichArr) {
                if (norVandak[0] == gishatichArr[j].x && norVandak[1] == gishatichArr[j].y) {
                    this.multiply = 0;
                    gishatichArr.splice(j, 1);
                    break;
                }
            }
        }

    }

    mah() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var j in mardArr) {
                if (this.x == mardArr[j].x && this.y == mardArr[j].y) {
                    mardArr.splice(j, 1);
                    break;
                }
            }
        }
    }


}

class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 10;
        this.speed = Math.round(random(0, 2));
        this.speed2 = this.speed += 1;
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


    walk() {
        var find = random(this.yntrelVandak(2, 3, 4));
        var chooseSquare = random(this.yntrelVandak(0, 1));
        this.multiply++;
        if (find) {
            if (this.multiply >= this.speed2) {
                this.energy++;
                if (matrix[find[1]][find[0]] = 2) {
                    for (var i in xotakerArr) {
                        if (find[0] == xotakerArr[i].x && find[1] == xotakerArr[i].y) {
                            xotakerArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[find[1]][find[0]] = 3) {
                    for (var j in gishatichArr) {
                        if (find[0] == gishatichArr[j].x && find[1] == gishatichArr[j].y) {
                            gishatichArr.splice(j, 1);
                            break;
                        }
                    }
                }
                else if (matrix[find[1]][find[0]] = 4) {
                    for (var k in shunArr) {
                        if (find[0] == shunArr[k].x && find[1] == shunArr[k].y) {
                            shunArr.splice(k, 1);
                            break;
                        }
                    }
                }

                matrix[find[1]][find[0]] = 5;
                matrix[this.y][this.x] = 0;
                this.x = find[0];
                this.y = find[1];
                this.multiply = 0;

            }
        }
        else if (chooseSquare && this.multiply >= this.speed) {
            this.energy--;
            matrix[chooseSquare[1]][chooseSquare[0]] = 5;
            matrix[this.y][this.x] = 0;
            this.x = chooseSquare[0];
            this.y = chooseSquare[1];
            this.multiply = 0;

        }
    }

}


