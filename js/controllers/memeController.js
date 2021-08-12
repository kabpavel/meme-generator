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
    debugger
    img.src = getImage().url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawTextLines();
    }
}

function drawTextLines() {
    getMeme().lines.forEach((line) => {
        drawText(line)
    })
}

function drawText(line) {
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.lineWidth = 4
    gCtx.fillText(line.txt, line.x, line.y)
}

function onTypeText() {
    console.log('ontypetext')
    var txt = getInputValue('.meme-text')
    console.log('txt', txt)
    setSelectedLineTxt(txt)
    renderCanvas()
}

function onIncrease() {
    console.log('onIncrease')
    changeFontSizeBy(+5)
    renderCanvas()
}

function onDecrease() {
    console.log('onDecrease')
    changeFontSizeBy(-5)
    renderCanvas()
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






