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
    [1,1,1,1,1,1,1,1,1,1,1,1],//NOT VISIBLE
    [1,1,1,1,1,1,1,1,1,1,1,1]//NOT VISIBLE
];

var prevRandomNumber;

function getRandomFigure()
{
    var theFigures = ["I","L","NL","O","S","Z","T"];
    var randomNumber = Math.floor(Math.random() * 7);
    while(randomNumber == prevRandomNumber)
    {
        randomNumber = Math.floor(Math.random() * 7);
    }
    prevRandomNumber = randomNumber;

    return theFigures[randomNumber];
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

function getRotated(inputFigure)
{
    var figureImage = new Image();
    switch(inputFigure.label)
    {
        case "I":
            if (inputFigure.state == 0)
            {
                figureImage.src = 'assets/i2.gif';
                inputFigure.figureImage = figureImage;
                inputFigure.state = 1;
            }
            else
            {
                figureImage.src = 'assets/i.gif';
                inputFigure.figureImage = figureImage;
                inputFigure.state = 0;
            }
            break;
        case "L":
            switch(inputFigure.state)
            {
                case 0:
                    figureImage.src = 'assets/l2.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 1;
                    break;
                case 1:
                    figureImage.src = 'assets/l3.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 2;
                    break;
                case 2:
                    figureImage.src = 'assets/l4.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 3;
                    break;
                case 3:
                    figureImage.src = 'assets/l.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 0;
                    break;
            }
            break;
        case "NL":
            switch(inputFigure.state)
            {
                case 0:
                    figureImage.src = 'assets/nl2.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 1;
                    break;
                case 1:
                    figureImage.src = 'assets/nl3.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 2;
                    break;
                case 2:
                    figureImage.src = 'assets/nl4.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 3;
                    break;
                case 3:
                    figureImage.src = 'assets/nl.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 0;
                    break;
            }
            break;
        case "O":

            break;
        case "S":
            if (inputFigure.state == 0)
            {
                figureImage.src = 'assets/s2.gif';
                inputFigure.figureImage = figureImage;
                inputFigure.state = 1;
            }
            else
            {
                figureImage.src = 'assets/s.gif';
                inputFigure.figureImage = figureImage;
                inputFigure.state = 0;
            }
            break;
        case "Z":
            if (inputFigure.state == 0)
            {
                figureImage.src = 'assets/z2.gif';
                inputFigure.figureImage = figureImage;
                inputFigure.state = 1;
            }
            else
            {
                figureImage.src = 'assets/z.gif';
                inputFigure.figureImage = figureImage;
                inputFigure.state = 0;
            }
            break;
        case "T":
            switch(inputFigure.state)
            {
                case 0:
                    figureImage.src = 'assets/t2.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 1;
                    break;
                case 1:
                    figureImage.src = 'assets/t3.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 2;
                    break;
                case 2:
                    figureImage.src = 'assets/t4.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 3;
                    break;
                case 3:
                    figureImage.src = 'assets/t.gif';
                    inputFigure.figureImage = figureImage;
                    inputFigure.state = 0;
                    break;
            }
            break;
    }
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
                    stage.matrix[y+2][x+5] = newFigure[y][x];
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
    for(var y = figure.length - 1; y >= 0; y--)
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
        getRotated(inputFigure);
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
        // checkIfLine(inputFigure);
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
    stage.deleteRow(line);
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

function atBottom(inputFigure)
{
    currentFigure.renderToStage();
    checkIfLine(inputFigure);
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
        figureRender.clear();
        currentFigure.update();
    }
}

function moveDownGravity()
{
    moveDown(currentFigure);
}

var stage =
    {
        canvas : document.createElement("canvas"),
        start : function()
        {
            this.takeDownTime = 700;
            this.canvas.width = 300 * mlt;
            this.canvas.height = 600 * mlt;
            this.canvas.style.zIndex   = 0;
            this.canvas.style.left = "50%";
            this.canvas.style.top = "10%";
            this.canvas.style.position = "absolute";
            this.canvas.style.backgroundColor = "#f1f1f1";
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.matrix = stageMatrix;
            this.interval = setInterval(updateStage, 40);
            this.intervalDown = setInterval(moveDownGravity, this.takeDownTime);
        },
        deleteRow : function(line)
        {
            var canvasContent = this.context.getImageData(0, 0, this.canvas.width, ((line - 2) * sqSize)-1);
            this.context.putImageData(canvasContent, 0, sqSize);
        },
        clear : function()
        {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };

var figureRender =
{
    canvas : document.createElement("canvas"),
    start : function()
    {
        this.canvas.width = 300 * mlt;
        this.canvas.height = 600 * mlt;
        this.canvas.style.zIndex   = 1;
        this.canvas.style.left = "50%";
        this.canvas.style.top = "10%";
        this.canvas.style.position = "absolute";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
    this.bottom = 0;
    this.state = 0;
    this.renderToStage = function()
    {
        var ctx = stage.context;
        ctx.drawImage(this.figureImage, (this.pos[1]-1)*sqSize,(this.pos[0]-2)*sqSize, this.sizeX * sqSize, this.sizeY * sqSize);
    }
    this.update = function()
    {
        var ctx = figureRender.context;
        ctx.drawImage(this.figureImage, (this.pos[1]-1)*sqSize,(this.pos[0]-2)*sqSize, this.sizeX * sqSize, this.sizeY * sqSize);
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
    figureRender.start();
    currentFigure = new element()

}

startGame();


