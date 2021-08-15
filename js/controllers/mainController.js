'use strict'

function init() {
    initGallery()
    initMeme()
    hideElement('.memo-container')
    hideElement('.ref-about')

    addMouseListeners()
    addTouchListeners()

    addKeydownEventListener()
    addSubmitEventListenerToForm('.search-form')
}