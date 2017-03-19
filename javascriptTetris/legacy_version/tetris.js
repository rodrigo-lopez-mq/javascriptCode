
var myGamePiece;
var sizeMultiplier = 2;
var globSize = 32 * sizeMultiplier;
var boardW = 10 * (globSize / 2);
var boardH = 20 * (globSize / 2);
var temp = 0;
var wait = false;
var end = false;
var falltime = 800;
var currPiece = 0;
var prev = 22;
var glob3Size = (globSize / 2) * 3;
var glob2Size = (globSize / 2);
var globTSize=2*globSize;



function startGame() {
    //myGamePiece = new component(globSize*sizeMultiplier, globSize*sizeMultiplier, "figures/o.png", 0, 0, "image");
    myGameArea.start();
    run();
}

function run() {

    newFigure();
    //setInterval(falling, falltime);
    //setInterval(falling(),falltime);
    //alert("Hello! I am an alert box!!");
    end = false;

}

function falling() {
    movedown();
}

function newFigure() {
    currPiece = Math.floor((Math.random() * 7) + 1);
    while (prev == currPiece) {
        currPiece = Math.floor((Math.random() * 7) + 1);
    }
    prev = currPiece;
    currPiece=5;

    switch (currPiece) {
        case 1:
//                zero=one;
//                addBoard(4,0,zero);
            myGamePiece = new component(globSize, globSize, "figures/o.png", (boardW / 10) * 4, 0, "image");
            break;
        case 2:
            myGamePiece = new component(globSize, glob3Size, "figures/el.png", (boardW / 10) * 4, 0, "image");
            break;

        case 3:
            myGamePiece = new component(globSize, glob3Size, "figures/le.png", (boardW / 10) * 4, 0, "image");
            break;

        case 4:
            myGamePiece = new component(glob3Size, globSize, "figures/s.png", (boardW / 10) * 4, 0, "image");
            break;

        case 5:
            myGamePiece = new component(glob3Size, globSize, "figures/z.png", (boardW / 10) * 4, 0, "image");
            break;

        case 6:
            myGamePiece = new component(glob3Size, globSize, "figures/t.png", (boardW / 10) * 4, 0, "image");
            break;

        case 7:
            myGamePiece = new component(globSize * 2, glob2Size, "figures/i.png", (boardW / 10) * 4, 0, "image");
            break;


    }


}

function timestamp() {
    return Date.getTime();
}

function collisionDown()
{
    var probe=0;
    //alert(myGameArea.context.getImageData(myGamePiece.x,probe,1,1).data[3]);
    switch (currPiece)
    {
        case 1:
            probe=(myGamePiece.y+globSize+1);
            if(myGameArea.context.getImageData(myGamePiece.x,probe,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+globSize+1,probe,1,1).data[3]>0){return true;}
            if(reachBottom()){return true;}
            break;

        case 2:
            probe=(myGamePiece.y+glob3Size+1);
            if(myGameArea.context.getImageData(myGamePiece.x,probe,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+glob2Size+1,probe,1,1).data[3]>0){return true;}
            if(reachBottom()){return true;}
            break;

        case 3:
            probe=(myGamePiece.y+glob3Size+1);
            if(myGameArea.context.getImageData(myGamePiece.x,probe,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+glob2Size+1,probe,1,1).data[3]>0){return true;}
            if(reachBottom()){return true;}
            break;

        case 4:
            probe=(myGamePiece.y+globSize+1);
            if(myGameArea.context.getImageData(myGamePiece.x,probe,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+glob2Size+1,probe,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+(glob2Size+glob2Size)+1,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(reachBottom()){return true;}
            break;

        case 5:
            probe=(myGamePiece.y+globSize+1);
            if(myGameArea.context.getImageData(myGamePiece.x,probe-glob2Size,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+glob2Size+1,probe,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+(glob2Size+glob2Size)+1,probe,1,1).data[3]>0){return true;}
            if(reachBottom()){return true;}
            break;

        case 6:
            probe=(myGamePiece.y+globSize+1);
            if(myGameArea.context.getImageData(myGamePiece.x,probe,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+glob2Size+1,probe,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+(glob2Size+glob2Size)+1,probe,1,1).data[3]>0){return true;}
            if(reachBottom()){return true;}
            break;

        case 7:
            probe=(myGamePiece.y+glob2Size+1);
            if(myGameArea.context.getImageData(myGamePiece.x,probe,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+glob2Size+1,probe,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+(glob2Size+glob2Size)+1,probe,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x+(glob2Size+glob2Size+glob2Size)+1,probe,1,1).data[3]>0){return true;}
            if(reachBottom()){return true;}
            break;
    }

    return false;
}

function collisionLeft()
{
    var probe=0;
    switch (currPiece)
    {
        case 1:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(reachLeft()){return true;}
            break;

        case 2:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+(glob2Size+glob2Size)+1,1,1).data[3]>0){return true;}
            if(reachLeft()){return true;}
            break;

        case 3:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(myGamePiece.x,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+glob2Size+1,1,1).data[3]>0){return true;}
            if(reachLeft()){return true;}
            break;

        case 4:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(myGamePiece.x,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(reachLeft()){return true;}
            break;

        case 5:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(myGamePiece.x,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(reachLeft()){return true;}
            break;

        case 6:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(myGamePiece.x,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(reachLeft()){return true;}
            break;

        case 7:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            if(reachLeft()){return true;}
            break;

        case 8:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            if(reachLeft()){return true;}
            break;
        case 14:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            if(reachLeft()){return true;}
            break;
        case 15:
            probe=(myGamePiece.x-1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            if(reachLeft()){return true;}
            break;
    }

    return false;
}

function collisionRight()
{
    var probe=0;
    switch (currPiece)
    {
        case 1:
            probe=(myGamePiece.x+globSize+1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(probe>boardW){return true;}
            break;

        case 2:
            probe=(myGamePiece.x+glob2Size+1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(probe+glob2Size,myGamePiece.y+(glob2Size+glob2Size)+1,1,1).data[3]>0){return true;}
            if(probe+glob2Size>boardW){return true;}
            break;

        case 3:
            probe=(myGamePiece.x+globSize+1);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+glob2Size+1,1,1).data[3]>0){return true;}
            if(probe>boardW){return true;}
            break;

        case 4:
            probe=(myGamePiece.x+1+glob3Size);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe-glob2Size,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(probe>boardW){return true;}
            break;

        case 5:
            probe=(myGamePiece.x+1+glob3Size);
            if(myGameArea.context.getImageData(probe-glob2Size,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(probe>boardW){return true;}
            break;

        case 6:
            probe=(myGamePiece.x+1+glob3Size);
            if(myGameArea.context.getImageData(probe-glob2Size,myGamePiece.y,1,1).data[3]>0) {return true;}
            else if(myGameArea.context.getImageData(probe,myGamePiece.y+glob2Size+1,1,1).data[3]>0){return true;}
            if(probe>boardW){return true;}
            break;

        case 7:
            probe=(myGamePiece.x+1+globSize+globSize);
            if(myGameArea.context.getImageData(probe,myGamePiece.y,1,1).data[3]>0) {return true;}
            if(probe>boardW){return true;}
            break;
    }

    return false;
}

function reachLeft()
{
    if(myGamePiece.x-1<0)
    {
        return true;
    }
    return false;
}


function reachBottom() {

    if (currPiece == 1 ||
        currPiece == 4 ||
        currPiece == 5 ||
        currPiece == 6 ||
        currPiece == 8 ||
        currPiece == 9
    ) {
        temp = myGamePiece.y + (globSize)+1;
    }

//
    if (currPiece == 2 ||
        currPiece == 3 ||
        currPiece == 10 ||
        currPiece == 11 ||
        currPiece == 12
    ) {
        temp = myGamePiece.y + (glob3Size)+1;
    }

    if (currPiece == 7
    ) {
        temp = myGamePiece.y + (glob2Size)+1;
    }

    if (!(temp < boardH)) {
        return true;
    }
    return false;
}

function rotate()
{
    clearArea();

    myGamePiece.rotate();

}



var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = boardW;
        this.canvas.height = boardH;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        //this.context.fillStyle="#FF0000";
        //this.context.fillRect(globSize,0,globSize,globSize);
        //alert(this.context.getImageData(0,0,1,1).data[3]);
        //setInterval(falling(),falltime);
    },
    clear: function (a, b, c, d) {
        //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.clearRect(a, b, c, d);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.r=1;
    this.rotate=function()
    {
        this.r++;

        if (this.r>4)
        {
            this.r=1;
        }

        rotate_image();



    }
    this.update = function () {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    //setInterval(falling(),falltime);
}

function clearArea() {
    switch (currPiece) {
        case 1:
            myGameArea.clear(
                myGamePiece.x,
                myGamePiece.y,
                globSize,
                globSize
            );
            break;
        case 2:
            myGameArea.clear(
                myGamePiece.x,
                myGamePiece.y,
                globSize,
                glob3Size
            );
            break;
        case 3:
            myGameArea.clear(
                myGamePiece.x,
                myGamePiece.y,
                globSize,
                glob3Size
            );
            break;
        case 4:
            myGameArea.clear(
                myGamePiece.x,
                myGamePiece.y,
                glob3Size,
                globSize
            );
            break;
        case 5:
            myGameArea.clear(
                myGamePiece.x,
                myGamePiece.y,
                glob3Size,
                globSize
            );
            break;
        case 6:
            myGameArea.clear(
                myGamePiece.x,
                myGamePiece.y,
                glob3Size,
                globSize
            );
            break;
        case 7:
            myGameArea.clear(
                myGamePiece.x,
                myGamePiece.y,
                globSize * 2,
                glob2Size
            );
            break;
    }
}

function updateGameArea() {


    myGamePiece.newPos();
    myGamePiece.update();


}

function updateGameArea2() {

    myGamePiece.newPos();
    myGamePiece.update();
    newFigure();
}

function moveup() {
    temp = myGamePiece.y - (globSize / 2);
    if (temp >= 0) {
        myGamePiece.y -= globSize / 2;
    }

}

function movedown() {

    if (collisionDown()==false)
    {
        clearArea();
        myGamePiece.y+=glob2Size;
    }
    else
    {
        updateGameArea2();
    }

}

function moveleft() {
    if (collisionLeft()==false)
    {
        clearArea();
        myGamePiece.x-=glob2Size;
    }
}

function moveright() {

    if (collisionRight()==false)
    {
        clearArea();
        myGamePiece.x+=glob2Size;
    }

}

function clearmove() {
    wait = false;
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}

function whichButton(event) {
    //document.getElementById("demo").innerHTML = event.keyCode;

    switch (event.keyCode) {
        case 37:
            moveleft();
            break;

        case 38:
            //moveup();
            rotate();
            break;
        case 39:

            moveright();
            break;
        case 40:
            movedown();

            break;
        default:
            break;
    }
}


