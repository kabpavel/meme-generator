'use strict'

var gCanvas
var gCtx

let gIsMouseDown = false
let gLastPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

var gFont = 'impact'
var gAlign = 'center'
var gColor = 'white'
var gFontSize = 40
var gDefaultText = 'Type her'
var gIsStroke = true;

function initMeme() {
    initCanvas()
}

function initCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    setCanvasSize(280, 280)
}

function setCanvasSize(height, width) {
    gCanvas.height = height;
    gCanvas.width = width;
}

function getCanvasSize() {
    return {
        height: gCanvas.height,
        width: gCanvas.width
    }
}

function initMemeByImgId(imgId) {
    const text = gDefaultText
    const x = getStartXPositon()
    const y = getStartYPosition()
    createDefaultMeme(imgId, text, gFont, gAlign, gColor, gIsStroke, x, y)
    renderCanvas()
}

function getTextWidth(message) {
    const metrics = gCtx.measureText(message)
    return metrics.width
}

function getStartXPositon() {
    return (gCanvas.width / 2)
}

function getStartYPosition() {
    return (gCanvas.height / 2)
}

function getRandomYPosition() {
    return getRandomIntInclusive(30, gCanvas.height - 30);
}

function renderCanvas() {
    const img = new Image()
    img.src = getImage().url;
    img.onload = () => {
        const imageSize = getImageSize(gCanvas.width, gCanvas.height, img.width, img.height)
        gCtx.drawImage(img, 0, 0, imageSize["width"], imageSize["height"])
        drawTextLines();
    }
}

function getImageSize(canvWidth, canvHight, imgWidth, imgHight) {
    var ratio = imgWidth / imgHight;
    var newWidth = canvWidth;
    var newHeight = newWidth / ratio;
    if (newHeight > canvHight) {
        newHeight = canvHight;
        newWidth = newHeight * ratio;
    }
    return { width: newWidth, height: newHeight }
}

function drawTextLines() {
    getMeme().lines.forEach((line, idx) => {
        var isSlctLine = (idx === getMeme().selectedLineIdx)
        drawText(line, isSlctLine)
    })
}

function drawText(line, isSlctLine) {
    let fontFace = getLineFontFace(line.font);
    if (!fontFace) return
    fontFace.load().then(function () {

        if (line.isStroke) {
            gCtx.strokeStyle = 'black';
        } else {
            gCtx.strokeStyle = 'transparent';
        }

        gCtx.textAlign = line.align
        gCtx.font = `${line.size}px ${line.font}`
        gCtx.fillStyle = line.color
        gCtx.lineWidth = 1        
        gCtx.strokeText(line.txt, line.x, line.y)
        gCtx.fillText(line.txt, line.x, line.y)
    });
}

function getLineFontFace(font) {
    let fontFace = null
    document.fonts.forEach((fontFace1) => {
        if (fontFace1.family === font) {
            fontFace = fontFace1;
        }
    })

    return fontFace
}

function onTypeText() {
    const txt = getInputValue('.meme-text')
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
    const canvasSize = getCanvasSize()
    changeLocation(direction, canvasSize)
    renderCanvas()
}

function onAddLine() {
    const txt = gDefaultText
    const x = getStartXPositon()
    const y = getRandomYPosition()
    addMemeLine(txt, gFont, gFontSize, gAlign, gColor, gIsStroke, x, y)
    setInputValue('.meme-text', txt)
    renderCanvas()
}

function onSwitchLine() {
    debugger
    switchLine()
    renderCanvas()
}

function isSelectedLine(id) {
    const lineIdx = gMeme.lines.findIndex((line) => line.id === id)
    return lineIdx === gMeme.selectedLineIdx
}

function onSendToTrash() {
    removeSelectedLine()
    renderCanvas()
}

function onDownload(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme-file.jpg'
}

function onChooseFont() {
    const font = getInputValue('.choose-font')
    if (!font) return
    setSelectedLineFont(font)
    //setInputValue('.choose-font', '');
    renderCanvas()
}

function onSelectColor() {
    const color = getInputValue('.btn-paint input')
    changeColor(color);
    renderCanvas();
}


function onChangeStrock() {
    console.log('onChangeStrock')
    changeSelectedLineStrock();
    renderCanvas();
}

function addMouseListeners() {
    gCanvas.addEventListener('mousedown', onMouseDown)
    gCanvas.addEventListener('mousemove', draw)
    gCanvas.addEventListener('mouseup', onMouseUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchstart', onMouseDown)
    gCanvas.addEventListener('touchmove', draw)
    gCanvas.addEventListener('touchend', onMouseUp)
}

function onMouseDown() {
    gIsMouseDown = true
}

function onMouseUp() {
    gIsMouseDown = false
    gLastPos = null
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function draw(ev) {
    if (!gIsMouseDown && ev.type !== 'click') return
    const pos = getEvPos(ev)
    const { x, y } = pos
    if (!gLastPos) gLastPos = pos
    const diffX = Math.abs(gLastPos.x - x)
    const diffY = Math.abs(gLastPos.y - y)
    const diff = (diffX + diffY) / 2
    // switch (gCurrShape) {
    //     case 'triangle':
    //         drawTriangle(x, y, diff)
    //         break;
    //     case 'rectangle':
    //         drawRect(x, y, diff)
    //         break;
    //     case 'circle':
    //         drawArc(x, y, diff)
    //         break;
    // }
    gLastPos = pos
}
