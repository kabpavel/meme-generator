'use strict'

var gMeme

function getMeme() {
    return gMeme
}

function createDefaultMeme(selectedImgId, text, font, align, color, x, y) {
    var memeLine = createMemeLine(text, font, 40, align, color, x, y)
    gMeme = createMemeTemplate(selectedImgId, 0, [memeLine])
    console.log('gMeme', gMeme)
}

function createMemeTemplate(selectedImgId = -1, selectedLineIdx = 0, lines = []) {
    return {
        selectedImgId,
        selectedLineIdx,
        lines
    }
}

function createMemeLine(txt, font, size, align, color, x, y) {
    return {
        id: makeId(),
        txt,
        font,
        size,
        align,
        color,
        x,
        y
    }
}

function addMemeLine(txt, font, size, align, color, x, y) {
    const newLine = createMemeLine(txt, font, size, align, color, x, y)
    gMeme.selectedLineIdx = gMeme.lines.push(newLine) - 1
}

function setSelectedLineTxt(txt) {
    getSelectedLine().txt = txt;
}

function getSelectedLine() {
    console.log('gMeme', gMeme)
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
    return gMeme.lines[gMeme.selectedLineIdx];
}

function getImage() {
    return getImageById(gMeme.selectedImgId);
}

function changeFontSizeBy(num) {
    gMeme.lines[gMeme.selectedLineIdx].size += num;
}

function changeLocation(direction) {
    switch (direction) {
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].x += 5;
            break;
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].x += -5;
            break;
        case 'up':
            gMeme.lines[gMeme.selectedLineIdx].y += -5;
            break;
        case 'down':
            gMeme.lines[gMeme.selectedLineIdx].y += +5;
            break;
    }
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
}

function removeSelectedLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if(gMeme.lines.length === 0) gMeme.selectedLineIdx = -1
    if(gMeme.lines.length < gMeme.selectedLineIdx + 1 ) gMeme.selectedLineIdx = 0
}