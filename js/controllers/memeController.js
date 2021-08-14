'use strict'

var gCanvas
var gCtx
let gIsMouseDown = false
let gLastPos;
var gMemePlace = 1
var gFont = 'Impact'
var gAlign = 'center'
var gColor = 'orange'
var gFontSize = 40
var gDefaultText = 'Type her'

function initMeme() {
    initCanvas()
}

function initCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function initMemeByImgId(imgId) {
    const text = gDefaultText;
    const x = getXPositon(getTextWidth(text))
    const y = getYPosition();
    createDefaultMeme(imgId, text, gFont, gAlign, gColor, x, y)
    renderCanvas()
}

function getTextWidth(message) {
    const metrics = gCtx.measureText(message)
    return metrics.width
}

function getXPositon(textWidth) {
    return (gCanvas.width / 2) - (textWidth / 2)
}

function getYPosition() {
    return (gCanvas.height / 2)
}

function getRandomYPosition() {
    return getRandomIntInclusive(30, gCanvas.height - 30);
}

function setStart() {
    gMemePlace = 1
}

function renderCanvas() {
    const img = new Image()
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
    gCtx.fillStyle = line.color    
    gCtx.lineWidth = 1
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
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
    changeLocation(direction)
    renderCanvas()
}

function onAddLine() {
    const text =  gDefaultText;
    const x = getXPositon(getTextWidth(text))
    const y = getRandomYPosition();
    addMemeLine(text, gFont, gFontSize, gAlign, gColor, x, y);
    setInputValue('.meme-text', text)
    renderCanvas()
}

function onSwithLine() {
    switchLine()
    renderCanvas()
}

function isSelectedLine(id) {
    const lineIdx = gMeme.lines.findIndex((line) => {
        return line.id === id
    })
    return lineIdx === gMeme.selectedLineIdx
}

function onSendToTrash() {
    removeSelectedLine()
    renderCanvas()
}


function addMouseListeners() {
    gCanvas.addEventListener('mousedown', onMouseDown)
    gCanvas.addEventListener('mousemove', getEvPos)
    gCanvas.addEventListener('mouseup', onMouseUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchstart', onMouseDown)
    gCanvas.addEventListener('touchmove', getEvPos)
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
    let pos = {
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
