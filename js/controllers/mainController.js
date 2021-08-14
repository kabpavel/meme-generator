'use strict'

function init() {
    initGallery()
    initMeme()
    hideElement('.memo-container')
    
    addMouseListeners()
    addTouchListeners()

    addKeydownEventListener()
    addSubmitEventListenerToForm('.search-form')

    hideElement('.control-img.align-left')//todo
    hideElement('.control-img.center-text')//todo
    hideElement('.control-img.align-right')//todo
    hideElement('.chose-font')//todo
    hideElement('.control-img.text-stroke')//todo
    hideElement('.control-img.paint')//todo
    hideElement('.share-btn.share')//todo
    hideElement('.share-btn.download')//todo
    hideElement('.ref-about')//todo
}