'use strict'

function init() {
    // renderImageGallery ()

}

function renderImageGallery () {
    var imgs = getImagesToDisplay();
    
    var strHTML = imgs.reduce((acc, curr) => {
        var str = `<div><img src="./${curr.url}" onclick="onSelectImg(${curr.id})" alt=""></div>`
        return acc + str
    },'')

    setInnerHTML('.img-gallery-container', strHTML)
}

function onSelectImg(id) {
    console.log('onSelectImg')
    debugger
    hideElement('.img-gallery')

    var currImg = getImageById(id);
}