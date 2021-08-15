'use strict'

function init() {
    initGallery()
    initMeme()
    hideElement('.memo-container')
    
    addMouseListeners()
    addTouchListeners()

    addKeydownEventListener()
    addSubmitEventListenerToForm('.search-form')

    hideElement('.cntrl-btn.btn-align-left')//todo
    hideElement('.cntrl-btn.btn-center-text')//todo
    hideElement('.cntrl-btn.btn-align-right')//todo
    hideElement('.chose-font')//todo
    hideElement('.cntrl-btn.btn-text-stroke')//todo
    hideElement('.cntrl-btn.btn-paint')//todo
    hideElement('.btn-share.share')//todo
    hideElement('.btn-share.download')//todo
    hideElement('.ref-about')//todo
}