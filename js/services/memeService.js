'use strict'

var gMeme

function getMeme() {
    return gMeme
}

function createDefaultMeme(selectedImgId, text, font, align, color, isStroke, x, y) {
    var memeLine = createMemeLine(text, font, 40, align, color, isStroke, x, y)
    gMeme = createMemeTemplate(selectedImgId, 0, [memeLine])
}

function createMemeTemplate(selectedImgId = -1, selectedLineIdx = 0, lines = []) {
    return {
        selectedImgId,
        selectedLineIdx,
        lines
    }
}

function createMemeLine(txt, font, size, align, color, isStroke, x, y) {
    return {
        id: makeId(),
        txt,
        font,
        size,
        align,
        color,
        isStroke,
        x,
        y
    }
}

function addMemeLine(txt, font, size, align,  color, isStroke, x, y) {
    const newLine = createMemeLine(txt, font, size, align, color, isStroke, x, y)
    gMeme.selectedLineIdx = gMeme.lines.push(newLine) - 1
}

function setSelectedLineTxt(txt) {
    getSelectedLine().txt = txt;
}

function setSelectedLineFont(font) {
    console.log('setSelectedLineFont')
    getSelectedLine().font = font;
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function getImage() {
    return getImageById(gMeme.selectedImgId);
}

function changeFontSizeBy(num) {
    getSelectedLine().size += num;
}

function changeColor(color) {
    getSelectedLine().color = color;
}

function changeSelectedLineStrock() {
    
    var selectedLine = getSelectedLine()
    var tt = selectedLine.isStrock
    selectedLine.isStrock = !tt
}

function changeLocation(direction, canvasSize) {
    var cWidth = canvasSize["width"];
    var selectedLine = getSelectedLine()

    switch (direction) {
        case 'right':
            selectedLine.x += 5
            break;
        case 'left':
            selectedLine.x += -5
            break;
        case 'up':
            selectedLine.y += -5
            break;
        case 'down':
            selectedLine.y += +5
            break;
        case 'align-left':
            selectedLine.x = cWidth/2
            selectedLine.align = 'right'
            break;
        case 'center-text':
            selectedLine.x = cWidth/2;
            selectedLine.align = 'center'
            break;
        case 'align-right':
            selectedLine.x = cWidth/2;
            selectedLine.align = 'left'
            break;
    }
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
}

function removeSelectedLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (gMeme.lines.length === 0) gMeme.selectedLineIdx = -1
    if (gMeme.lines.length < gMeme.selectedLineIdx + 1) gMeme.selectedLineIdx = 0
}