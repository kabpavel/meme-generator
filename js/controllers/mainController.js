'use strict'

function init() {
    initGallery()
    initMeme()
    hideElement('.memo-container')

    addMouseListeners()
    addTouchListeners()

    addKeydownEventListener()
    addSubmitEventListenerToForms(['.search-form', '.choose-font-form'])
}