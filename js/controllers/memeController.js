'use strict'

var gCanvas
var gCtx

function initMeme() {
    initCanvas()
}

function initCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function initMemeByImgId(imgId) {
    createDefaultMeme(imgId)
    renderCanvas()
}

function renderCanvas() {
    var img = new Image()
    img.src = getImage().url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawTextLines();
    }
}

function drawTextLines() {
    console.log('getMeme().lines', getMeme().lines)
    getMeme().lines.forEach((line) => {
        drawText(line)
    })
}

function drawText(line) {
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.CZ
    gCtx.lineWidth = 4
    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.fillStyle = line.color
    console.log('line',line)

    
    console.log('isSelectedLine(line)',isSelectedLine(line)) 

    if (isSelectedLine(line)) {
         gCtx.strokeStyle = 'white'
         gCtx.strokeText(line.txt, line.x, line.y)
    }
}

function onTypeText() {
    var txt = getInputValue('.meme-text')
    setSelectedLineTxt(txt)
    renderCanvas()
}

function onIncrease() {
    changeFontSizeBy(+5)
    renderCanvas()
}

function onDecrease() {
    changeFontSizeBy(-5)
    renderCanvas()
}

function onLocation(direction) {
    changeLocation(direction)
    renderCanvas()
}

function onAddLine() {
    console.log('onAddLine')
    addMemeLine('')
    setInputValue('.meme-text', '')
}

function onSwithLine() {
    console.log('onSwithLine');
    switchLine()
    renderCanvas()
}

function isSelectedLine(id) {
    var lineIdx = gMeme.lines.findIndex((line) => {
        return line.id === id
    })
    return lineIdx === gMeme.selectedLineIdx
}

// function drawText(txt, x, y) {
//     debugger
//     gCtx.font = '48px serif';
//     gCtx.fillText(txt, x, y);
//     gCtx.lineWidth = 2
//     gCtx.strokeStyle = 'brown'
//     gCtx.fillStyle = 'white'
//     gCtx.font = '40px Arial'
//     gCtx.fillText(txt, x, y)
//     gCtx.strokeText(txt, x, y)
// }

/*
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font = "20px Georgia";
ctx.fillText("Hello World!", 10, 50);

ctx.font = "30px Verdana";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0"," magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Big smile!", 10, 90);

*/






