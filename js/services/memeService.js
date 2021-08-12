'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [
        {
            id: makeId(),
            txt: 'I never eat Falafel',
            font: 'Impact',
            size: 20,
            align: 'left',
            color: getRandomColor(),
            x: 40,
            y: 40
        }
    ]
}

function getMeme() {
    return gMeme
}

function createDefaultMeme(selectedImgId) {
    console.log('selectedImgId', selectedImgId)
    gMeme = createMeme(selectedImgId, 0, [createMemeLine()])
    console.log('gMeme', gMeme)
}

function createMeme(selectedImgId = -1, selectedLineIdx = 0, lines = []) {
    return {
        selectedImgId,
        selectedLineIdx,
        lines
    }
}

function createMemeLine(txt = 'I never eat Falafel', font = 'Impact', size = 20, align = 'top', color = getRandomColor(), x = 20, y = 30) {
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

function addMemeLine(txt) {

    var newLine = createMemeLine(txt)
    gMeme.selectedLineIdx = gMeme.lines.push(newLine) - 1
}

function setSelectedLineTxt(txt) {
    getSelectedLine().txt = txt;
}

function getSelectedLine() {
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
    console.log('gMeme.selectedLineIdx',gMeme.selectedLineIdx)
}