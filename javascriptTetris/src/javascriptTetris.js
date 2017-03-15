/**
 * Rodrigo Lopez - 2017
 */

function createTable(tableData)
{
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);

  var input = document.createElement('input');
  input.value = demoValue;
  document.body.appendChild(input);
}

var key = {
    LEFT:   37,
    UP:     38,
    RIGHT:  39,
    DOWN:   40
};


function eventListener(event, obj, fn) {
    if (window.addEventListener) {
        //Support for modern browsers
        obj.addEventListener(event, fn, false);
    }
    else {
        //Support for IE
        obj.attachEvent('on'+event, fn);
    }
}

function handlekeyboardEvent(event) {
    if (!event) 
    {
        event = window.event;
    } 
    var keycode = event.keyCode || event.which; 

    switch (keycode) {
        case key.LEFT:
            moveLeft(currentFigure);
            break;
        case key.UP:
            rotate(currentFigure);
            break;
        case key.RIGHT:
            moveRight(currentFigure);
            break;
        case key.DOWN:
            moveDown(currentFigure);
            break;
        default:
            break;
    }
}

var figIvert = [
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [0,1,0]
];

var figIhor = [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0]
];

var figL = [
    [0,0,1],
    [1,1,1],
    [0,0,0]
];

var figNL = [
    [1,0,0],
    [1,1,1],
    [0,0,0]
];

var figO = [
    [1,1],
    [1,1]
];

var figSone = [
    [0,0,0],
    [0,1,1],
    [1,1,0]
];

var figZone = [
    [0,0,0],
    [1,1,0],
    [0,1,1]
];

var figStwo = [
    [0,1,0],
    [0,1,1],
    [0,0,1]
];

var figZtwo = [
    [0,1,0],
    [1,1,0],
    [1,0,0]
];

var figT = [
    [0,1,0],
    [1,1,1],
    [0,0,0]
];

            
var stageMatrix = [
    [1,0,0,0,0,0,0,0,0,0,0,1],//NOT VISIBLE
    [1,0,0,0,0,0,0,0,0,0,0,1],//NOT VISIBLE
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]//NOT VISIBLE
];

var prevRandomNumber;

function getRandomFigure()
{
    var theFigures = ["I","L","NL","O","S","Z","T"];
    var randomNumber = Math.floor(Math.random() * 8);
    while(randomNumber == prevRandomNumber)
    {
        randomNumber = Math.floor(Math.random() * 8);
    }
    prevRandomNumber = randomNumber;

    return "T";//theFigures[randomNumber];
}

function getFigure(label)
{
    switch(label)
    {
        case "I":
            return [].concat(figIhor);
            break;
        case "L":
            return [].concat(figL);
            break;
        case "NL":
            return [].concat(figNL);
            break;
        case "O":
            return [].concat(figO);
            break;
        case "S":
            return [].concat(figSone);
            break;
        case "Z":
            return [].concat(figZone);
            break;
        case "T":
            return [].concat(figT);
            break;
    }
}

function initPosition(label)
{
    var pos;
    switch(label)
    {
        case "I":
            pos = [1, 4];
            break;
        case "O":
            pos = [2, 5];
            break;
        case "S":
            pos = [1, 5];
            break;
        case "Z":
            pos = [1, 5];
            break;
        default:
            pos = [2, 5];
            break;
    }
    return pos;
}

function initBoardSize(label)
{
    var size = [];
    switch(label)
    {
        case "I":
            size = [1, 4];
            break;
        case "O":
            size = [2, 2];
            break;
        case "S":
            size = [2, 3];
            break;
        case "Z":
            size = [2, 3];
            break;
        case "L":
            size = [2, 3];
            break;
        case "NL":
            size = [2, 3];
            break;
        case "T":
            size = [2, 3];
            break;
    }
    return size;
}

function initGraphic(label)
{
    var figureImage = new Image();

    switch(label)
    {
        case "I":
            figureImage.src = 'assets/i.gif';
            break;
        case "L":
            figureImage.src = 'assets/l.gif';
            break;
        case "NL":
            figureImage.src = 'assets/nl.gif';
            break;
        case "O":
            figureImage.src = 'assets/o.gif';
            break;
        case "S":
            figureImage.src = 'assets/s.gif';
            break;
        case "Z":
            figureImage.src = 'assets/z.gif';
            break;
        case "T":
            figureImage.src = 'assets/t.gif';
            break;
    }

    return figureImage;
}


function createFigure(label)
{
    var newFigure = getFigure(label);

    var sizeY = newFigure.length;
    var sizeX = newFigure[0].length;

    switch(label)
    {
        case "I":
            for(var y = 0; y < sizeY; y++)
            {
                for(var x = 0; x < sizeX; x++)
                {
                    stage.matrix[y+1][x+4] = newFigure[y][x];
                }
            }
            break;
        case "O":
            for(var y = 0; y < sizeX; y++)
            {
                for(var x = 0; x < sizeY; x++)
                {
                    stage.matrix[y+2][x+6] = newFigure[y][x];
                }
            }
            break;
        case "S":
            for(var y = 0; y < sizeX; y++)
            {
                for(var x = 0; x < sizeY; x++)
                {
                    stage.matrix[y+1][x+5] = newFigure[y][x];
                }
            }
            break;
        case "Z":
            for(var y = 0; y < sizeX; y++)
            {
                for(var x = 0; x < sizeY; x++)
                {
                    stage.matrix[y+1][x+5] = newFigure[y][x];
                }
            }
            break;
        default:
            for(y = 0; y < sizeY; y++)
            {
                for(x = 0; x < sizeX; x++)
                {
                    stage.matrix[y+2][x+5] = newFigure[y][x];
                }
            }
            break;
    }
    return newFigure;
}

function rotateLeft(inputFigure)
{
    var col, row, tmp, ret;
    col = inputFigure.length;
    row = inputFigure[0].length;
    tmp = [];
    ret = [];

    for (var k = col - 1; k >= 0; k--)
    {
        tmp = [];
        for(var y = 0; y < row; y++)
        {
            tmp.push(inputFigure[y][k]);
        }
        ret.push(tmp);
    }
    return ret;
}

function rotateRight(inputFigure)
{
    var col, row, tmp, ret;
    switch(inputFigure.label)
    {
        case "I":
            if(inputFigure.figure[0][1] == 1)
            {
                return [].concat(figIhor);
            }
            else
            {
                return [].concat(figIvert);
            }
            break;

        case "S":
            if(inputFigure.figure[2][0] == 1)
            {
                return [].concat(figStwo);
            }
            else
            {
                return [].concat(figSone);
            }
            break;

        case "Z":
            if(inputFigure.figure[2][1] == 1)
            {
                return [].concat(figZtwo);
            }
            else
            {
                return [].concat(figZone);
            }
            break;

        default:
            col = inputFigure.figure.length;
            row = inputFigure.figure[0].length;
            tmp = [];
            ret = [];

            for (var k = 0; k < col; k++)
            {
                tmp = [];
                for(var y = row - 1; y >= 0; y--)
                {
                    tmp.push(inputFigure.figure[y][k]);
                }
                ret.push(tmp);
            }
            return ret;
            break;
    }
    return ret;
}

function clearFigure(inputFigure)
{
    for(var y = 0; y < inputFigure.sizeY; y++)
    {
        if(y + inputFigure.pos[0] >= 22)
        {
            break;
        }
        for (var x = 0; x < inputFigure.sizeX; x++)
        {
            if(stage.matrix[y + inputFigure.pos[0]][x + inputFigure.pos[1]] & inputFigure.figure[y][x] == 1)
            {
                stage.matrix[y + inputFigure.pos[0]][x + inputFigure.pos[1]] = 0;
            }
        }
    }
}

function moveFigure(inputFigure, directionx, directiony)
{
    for(var y = 0; y < inputFigure.sizeY; y++)
    {
        for (var x = 0; x < inputFigure.sizeX; x++)
        {
            stage.matrix[y + inputFigure.pos[0]+directiony][x + inputFigure.pos[1]+directionx] += inputFigure.figure[y][x];
        }
    }
    inputFigure.pos[0] += directiony;
    inputFigure.pos[1] += directionx;
}

function validMove(inputFigure, figure, directionx, directiony)
{
    for(var y = 0; y < figure.length; y++)
    {
        for (var x = 0; x < figure[0].length; x++)
        {
            if(stage.matrix[y + inputFigure.pos[0]+directiony][x + inputFigure.pos[1]+directionx] & figure[y][x] == 1)
            {
                if(directiony == 1)
                {
                    inputFigure.bottom = y + inputFigure.pos[0];
                }
                return 0;
            }
        }
    }
    return 1;
}

function rotate(inputFigure)
{
    clearFigure(inputFigure);
    var tmpFigure = rotateRight(inputFigure);

    if (validMove(inputFigure, tmpFigure, 0, 0))
    {
        inputFigure.figure = tmpFigure;
        inputFigure.sizeX = inputFigure.figure[0].length;
        inputFigure.sizeY = inputFigure.figure.length;
        moveFigure(inputFigure, 0, 0);
    }
    else
    {
        moveFigure(inputFigure, 0, 0);
    }
}

function moveRight(inputFigure)
{

    clearFigure(inputFigure);

    if (validMove(inputFigure,inputFigure.figure, 1, 0))
    {
        moveFigure(inputFigure, 1, 0);
    }
    else
    {
        moveFigure(inputFigure, 0, 0);
    }
}

function moveLeft(inputFigure)
{
    clearFigure(inputFigure);
    if (validMove(inputFigure,inputFigure.figure, -1, 0))
    {
        moveFigure(inputFigure, -1, 0);
    }
    else
    {
        moveFigure(inputFigure, 0, 0);
    }
}

function moveDown(inputFigure)
{
    clearFigure(inputFigure);
    if (validMove(inputFigure,inputFigure.figure, 0, 1))
    {
        moveFigure(inputFigure, 0, 1);
    }
    else
    {
        moveFigure(inputFigure, 0, 0);
        checkIfLine(inputFigure);
        atBottom(inputFigure);
    }
}

function removeLine(line)
{
    for(var y = line; y >= 1; y--)
    {
        for (var x = 0; x < 12; x++)
        {
            stage.matrix[y][x] = stage.matrix[y-1][x];
        }
    }
}

function checkIfLine(inputFigure)
{
    var line = inputFigure.bottom;
    var ones =0;
    var k =0;
    while(k < 5)
    {
        ones = 0;
        for (var x = 0; x < 12; x++)
        {
            if (stage.matrix[line][x] == 1) {
                ones++;
            }
        }
        if (ones >= 12)
        {
            removeLine(line);
        }
        else
        {
           break;
        }
        k++;
    }
}

function atBottom()
{
    currentFigure = new element();
}

var demoValue;

function updateStage()
{
    if (debug == 1)
    {
        document.body.innerHTML = '';
        createTable(stage.matrix);
    }
    else
    {

        stage.clear();

        currentFigure.update();
        // var ctx = stage.context;
        // ctx.fillStyle = "#FF0000";
        // ctx.fillRect(0,0,150,75);
        // alert("m");
        // var ctx = stage.context;

        // var figureImage = new Image();
        // figureImage.src = 'assets/t.gif';
        //
        // ctx.drawImage(figureImage,50,50);
    }
}

var stage =
    {
        canvas : document.createElement("canvas"),
        start : function()
        {

            this.canvas.width = 300 * mlt;
            this.canvas.height = 600 * mlt;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            // document.body.appendChild(this.canvas);
            this.matrix = stageMatrix;
            this.interval = setInterval(updateStage, 100);
        },
        clear : function()
        {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };

function element()
{
    this.label = getRandomFigure();
    this.figure = createFigure(this.label);
    this.sizeY = this.figure.length;
    this.sizeX = this.figure[0].length;
    this.pos = initPosition(this.label);
    this.figureImage = initGraphic(this.label);
    this.boardSize = initBoardSize(this.label);
    this.bottom = 0;
    this.update = function()
    {
        var ctx = stage.context;
        ctx.drawImage(this.figureImage, (this.pos[1]-1)*sqSize,(this.pos[0]-2)*sqSize, this.boardSize[1] * sqSize, this.boardSize[0] * sqSize);
    }
}



var debug = 0;
var mlt = 0.8;
var sqSize= 30 * mlt;
var currentFigure;
eventListener('keydown', document, handlekeyboardEvent);


function startGame()
{
    stage.start();

    currentFigure = new element()

}

startGame();


