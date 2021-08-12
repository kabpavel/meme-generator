'use strict'

function initGallery() {
    renderImageGallery ()
}

function renderImageGallery () {
    var imgs = getImagesToDisplay();   
    var strHTML = imgs.reduce((acc, curr) => {
        var str = `<div><img src="./${curr.url}" onclick="onSelectImg(${curr.id})" alt=""></div>`
        return acc + str
    },'')
    setInnerHTML('.img-gallery-container', strHTML)
}

function onSelectImg(imgId) {
    hideElement('.img-gallery')
    showElement('.memo-container')
    console.log('imgId',imgId)
    initMemeByImgId(imgId)
}