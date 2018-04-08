var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var shunArr = [];
var mardArr = [];
var amenakerArr = [];
var bombArr = [];

var winterArr = [];
var springArr = [];
var summerArr = [];
var autumnArr = [];

var n = 40;
var m = 40;
var side = 15;

var matrix = [];
var myText = document.getElementById('winter');

var winter, spring, summer, autumn, game_over;

function weather() {
    winter = setTimeout(function winter () {this.speed = 1; myText.innerText = "Winter"}, 0);
    spring = setTimeout(function spring () {this.speed *= 2; myText.innerText = "Spring"}, 2000);
    summer = setTimeout(function summer () {this.speed *= 4; myText.innerText = "Summer"}, 4000);
    autumn = setTimeout(function autumn () {this.speed /= 1.5; myText.innerText = "Autumn"}, 6000); 
    game_over = setTimeout(function game_over () {myText.innerText = "Game Over"}, 8000)
}

weather();

function setup() {

    frameRate(5);

    for (var a = 0; a < m; a++) {
        matrix[a] = [];
    }

    for (var i = 0; i < m; i++) {
        for (var a = 0; a < n; a++) {
            matrix[i][a] = Math.round(random(7));

        }
    }

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }

            if (matrix[y][x] == 2) {
                var xotker = new Xotaker(x, y);
                xotakerArr.push(xotker);
            }

            if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }

            if (matrix[y][x] == 4) {
                var shun = new Shun(x, y);
                shunArr.push(shun);
            }

            if (matrix[y][x] == 5) {
                var mard = new Mard(x, y);
                mardArr.push(mard);
            }

            if(matrix[y][x] == 6) {
                var amenaker = new Amenaker(x, y);
                amenakerArr.push(amenaker);
            }

            if(matrix[y][x] == 7) {
                var bomb = new Bomb(x, y);
                bombArr.push(bomb);
            }

        }

    }

}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2) {
                fill("rgba(255,255,0,0)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2.5) {
                fill("rgba(255,255,0,180)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill("#544978");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3.5) {
                fill("rgba(84, 73, 120, 180)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill("#F05D3D");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4.5) {
                fill("rgba(240, 93, 61, 180)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5) {
                fill("#F6E5C7");
                rect(x * side, y * side, side, side);
            }

            else if( matrix[y][x] == 6){
                fill("#6B7620");
                rect(x * side, y * side, side, side);
            }

            else if( matrix[y][x] == 6.5){
                fill("rgba(107, 118, 32, 180)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 7){
                fill("black");
                rect(x * side, y * side, side, side);
            }

            //Exanak (Winter)

            if(myText.innerText == "Winter" && matrix[y][x] == 1) {
                fill("#96CA97");
                rect(x * side, y * side, side, side);
            } 

            if(myText.innerText == "Winter" && matrix[y][x] == 2) {
                fill("#DBF39F");
                rect(x * side, y * side, side, side);
            } 

            if(myText.innerText == "Winter" && matrix[y][x] == 2.5) {
                fill("rgba(219, 243, 159, 180)");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Winter" && matrix[y][x] == 3) {
                fill("#BAB1D6");
                rect(x * side, y * side, side, side);
            } 

            if(myText.innerText == "Winter" && matrix[y][x] == 3.5) {
                fill("rgba(186, 177, 214, 180)");
                rect(x * side, y * side, side, side);
            } 

            if(myText.innerText == "Winter" && matrix[y][x] == 4) {
                fill("#c99b91");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Winter" && matrix[y][x] == 4.5) {
                fill("rgba(201, 155, 145, 180)");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Winter" && matrix[y][x] == 5) {
                fill("#efe7e6");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Winter" && matrix[y][x] == 6) {
                fill("#636360");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Winter" && matrix[y][x] == 6.5) {
                fill("rgba(99, 99, 96, 180)");
                rect(x * side, y * side, side, side);
            }

            //Exanak (Spring)
        
            if(myText.innerText == "Spring" && matrix[y][x] == 1) {
                fill("#9fea4f");
                rect(x * side, y * side, side, side);
            } 

            if(myText.innerText == "Spring" && matrix[y][x] == 2) {
                fill("#91ad4a");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Spring" && matrix[y][x] == 2.5) {
                fill("rgba(145, 173, 74, 180)");
                rect(x * side, y * side, side, side);
            }
        
            if(myText.innerText == "Spring" && matrix[y][x] == 3) {
                fill("#776b9b");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Spring" && matrix[y][x] == 3.5) {
                fill("rgba(119, 107, 155, 180)");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Spring" && matrix[y][x] == 4) {
                fill("#a87164");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Spring" && matrix[y][x] == 4.5) {
                fill("rgba(168, 113, 100, 180)");
                rect(x * side, y * side, side, side);
            }
        
            if(myText.innerText == "Spring" && matrix[y][x] == 5) {
                fill("#efe0d7");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Spring" && matrix[y][x] == 6) {
                fill("#9fb21c");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Spring" && matrix[y][x] == 6.5) {
                fill("rgba(159, 178, 28, 180)");
                rect(x * side, y * side, side, side);
            }

            //Exanak (Summer -> default)

            //Exanak (Autumn)

            if(myText.innerText == "Autumn" && matrix[y][x] == 1) {
                fill("#ff9000");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 2) {
                fill("#846f03");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 2.5) {
                fill("rgba(132, 111, 3, 180)");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 3) {
                fill("#4c17ea");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 3.5) {
                fill("rgba(76, 23, 234, 180)");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 4) {
                fill("#701905");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 4.5) {
                fill("rgba(112, 25, 5, 180)");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 6) {
                fill("#deff00");
                rect(x * side, y * side, side, side);
            }

            if(myText.innerText == "Autumn" && matrix[y][x] == 6.5) {
                fill("rgba(222, 255, 0, 180)");
                rect(x * side, y * side, side, side);
            }

        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].sharjvel();
        xotakerArr[i].utel();
        xotakerArr[i].mah();
        xotakerArr[i].bazmanal();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].sharjvel();
        gishatichArr[i].utel();
        gishatichArr[i].mah();
        gishatichArr[i].bazmanal()
    }

    for (var i in shunArr) {
        shunArr[i].sharjvel();
        shunArr[i].utel();
        shunArr[i].mah();
        shunArr[i].bazmanal()
    }

    for (var i in mardArr) {
        mardArr[i].sharjvel_utel();
    }

    for (var i in amenakerArr) {
        amenakerArr[i].sharjvel();
        amenakerArr[i].utel();
        amenakerArr[i].bazmanal()
    }

    for (var i in bombArr) {
        bombArr[i].boom();
    }

    if(myText.innerText == "Game Over") {
        background('black');
        frameRate(0);
    }
    
}
    