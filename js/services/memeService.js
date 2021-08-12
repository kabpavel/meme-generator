'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [
        {
            id: makeId(),
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}

function createDefaultMeme(selectedImgId) {
    console.log('selectedImgId',selectedImgId)
    gMeme = createMeme(selectedImgId, 0, [createMemeLine()])
    console.log('gMeme',gMeme)
}

function createMeme(selectedImgId = -1, selectedLineIdx = 0, lines = []) {
    return {
        selectedImgId,
        selectedLineIdx,
        lines
    } 
}

function createMemeLine(txt = 'I never eat Falafel', font = 'Impact', size = 20, align = 'top', color = 'orange', x = 20, y =30) {  
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

function addMemeLine (txt) {
    var newLine = createMemeLine(txt)
    gMeme.selectedLineIdx = gMeme.lines.push() - 1
    return newLine.id
}

function setSelectedLineTxt (txt) {
    getSelectedLine().txt = txt;
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function getImage () {
   return getImageById(gMeme.selectedImgId);
}