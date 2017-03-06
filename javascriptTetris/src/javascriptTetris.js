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
    [0,0,0,0,0,0,0,0,0,0],//NOT VISIBLE
    [0,0,0,0,0,0,0,0,0,0],//NOT VISIBLE
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1]//NOT VISIBLE
];

function getRandomFigure()
{
    // var newFigure = [].concat(figT);
    // return newFigure;
}

function createFigure(inputStage)
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
                    inputStage[y+2][x+4] = newFigure[y][x];
                }
            }
            break;
        case 3:
            for(y = 0; y < size; y++)
            {
                for(x = 0; x < size; x++)
                {
                    inputStage[y+2][x+4] = newFigure[y][x];
                }
            }
            break;
        case 4:
                for(x = 0; x < size; x++)
                {
                    inputStage[2][x + 3] = newFigure[x];
                }
            break;
        default:
            break;
    }
}

function rotateLeft(inputMatrix)
{
    var col, row, tmp, ret;
    col = inputMatrix.length;
    row = inputMatrix[0].length;
    tmp = [];
    ret = [];

    for (var k = col - 1; k >= 0; k--)
    {
        tmp = [];
        for(var y = 0; y < row; y++)
        {
            tmp.push(inputMatrix[y][k]);
        }
        ret.push(tmp);
    }
    return ret;
}

function rotateRight(inputMatrix)
{
    var col, row, tmp, ret;
    col = inputMatrix.length;
    row = inputMatrix[0].length;
    tmp = [];
    ret = [];

    for (var k = 0; k < col; k++)
    {
        tmp = [];
        for(var y = row - 1; y >= 0; y--)
        {
            tmp.push(inputMatrix[y][k]);
        }
        ret.push(tmp);
    }
    return ret;
}

var figTest = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

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
            this.interval = setInterval(updateStage, 500);
        }

    }

function component()
{
    this.figure = createFigure();
}

stage.start();
var currentFigure = new component();


// currentFigure = new component(30, 30, "red", 10, 120);
// myGamePiece.gravity = 0.05;
// myScore = new component("30px", "Consolas", "black", 280, 40, "text");
// myGameArea.start();


