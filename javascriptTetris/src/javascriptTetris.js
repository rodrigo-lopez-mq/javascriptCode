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
            // info.value += "LEFT ";
            break;
        case key.UP:
            // info.value += "UP ";
            break;
        case key.RIGHT:
            moveRight(currentFigure);
            break;
        case key.DOWN:
            // info.value += "DOWN ";
            break;
        default:
            break;
    }
}

var figIvert = [
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]
];
var figIhor =
    [1,1,1,1];

var figL = [
    [0,1,0],
    [0,1,0],
    [0,1,1]
];

var figNL = [
    [0,1,0],
    [0,1,0],
    [1,1,0]
];

var figO = [
    [1,1],
    [1,1]
];

var figS = [
    [0,1,1],
    [1,1,0],
    [0,0,0]
];

var figZ = [
    [1,1,0],
    [0,1,1],
    [0,0,0]
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

function getRandomFigure()
{
    // var newFigure = [].concat(figT);
    // return newFigure;
}

function initPosition(size)
{
    if (size > 3)
    {
        var pos = [2,4];
        return pos;
    }
    else
    {
        var pos = [2,5];
        return pos;
    }
}

function getSize(inputFigure)
{
    var size = inputFigure.length;
    return size;
}

function createFigure()
{
    var size;
    var newFigure = [].concat(figT);
    size = newFigure.length;

    switch(size)
    {
        case 2:
            for(var y = 0; y < size; y++)
            {
                for(var x = 0; x < size; x++)
                {
                    stage.matrix[y+2][x+5] = newFigure[y][x];
                }
            }
            break;
        case 3:
            for(y = 0; y < size; y++)
            {
                for(x = 0; x < size; x++)
                {
                    stage.matrix[y+2][x+5] = newFigure[y][x];
                }
            }
            break;
        case 4:
                for(x = 0; x < size; x++)
                {
                    stage.matrix[2][x + 4] = newFigure[x];
                }
            break;
        default:
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
    col = inputFigure.length;
    row = inputFigure[0].length;
    tmp = [];
    ret = [];

    for (var k = 0; k < col; k++)
    {
        tmp = [];
        for(var y = row - 1; y >= 0; y--)
        {
            tmp.push(inputFigure[y][k]);
        }
        ret.push(tmp);
    }
    return ret;
}

function clearFigure(inputFigure)
{
    for(var y = inputFigure.pos[0]; y < inputFigure.pos[0]+inputFigure.size; y++)
    {
        for (var x = inputFigure.pos[1]; x < inputFigure.pos[1]+inputFigure.size; x++)
        {
            stage.matrix[y][x] = 0;
        }
    }
}

function moveFigure(inputFigure, directionx, directiony)
{
    for(var y = 0; y < inputFigure.size; y++)
    {
        for (var x = 0; x < inputFigure.size; x++)
        {
            stage.matrix[y + inputFigure.pos[0]][x + inputFigure.pos[1]+directionx] = inputFigure.figure[y][x];
        }
    }
    inputFigure.pos[0] += directiony;
    inputFigure.pos[1] += directionx;
}

function validMove(inputFigure, directionx, directiony)
{
    for(var y = 0; y < inputFigure.size; y++)
    {
        for (var x = 0; x < inputFigure.size; x++)
        {
            if(stage.matrix[y + inputFigure.pos[0]][x + inputFigure.pos[1]+directionx] & inputFigure.figure[y][x] == 1)
            {
                return 0;
            }
        }
    }
    return 1;
}

function moveRight(inputFigure)
{
    clearFigure(inputFigure);
    if (validMove(inputFigure, 1, 0))
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

}

var figTest = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

var demoValue;

// var figure1 = [].concat(figT);
// var figure2 = [].concat(figT);



// var one = [].concat(figTest);
// var line = [0,1,1];

// newFigure(stage);
// createTable(stage);

// one[0] |= line;
// createTable(one);
// createTable(line);

function updateStage()
{
    document.body.innerHTML = '';

    createTable(stage.matrix);
}

var stage =
    {
        start : function()
        {
            this.matrix = stageMatrix;
            this.interval = setInterval(updateStage, 100);
        }

    };

function element()
{
    this.figure = createFigure();
    this.size = getSize(this.figure);
    this.pos = initPosition(this.size);

}




var currentFigure;
eventListener('keydown', document, handlekeyboardEvent);


function startGame()
{
    stage.start();
    currentFigure = new element();
}

startGame();

// stage.start();
// var currentFigure = new component();


// currentFigure = new component(30, 30, "red", 10, 120);
// myGamePiece.gravity = 0.05;
// myScore = new component("30px", "Consolas", "black", 280, 40, "text");
// myGameArea.start();


