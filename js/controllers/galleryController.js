'use strict'

function initGallery() {
    renderSearchWord()
    renderImageGallery()
}

function renderImageGallery() {
    const imgs = getImagesToDisplay();
    const strHTML = imgs.reduce((acc, curr) => {
        var str = `<img class="img-gallery-div" src="./${curr.url}" onclick="onOpenMeme(${curr.id})" alt="">`
        return acc + str
    }, '')
    setInnerHTML('.img-gallery-container', strHTML)
}

function renderSearchWord() {
    const words = getSearchWords();
    let strHTML = `<option value="all" />`
    strHTML += words.reduce((acc, curr) => {
        var str = `<option value="${curr}" />`
        return acc + str
    }, '')

    console.log('strHTML',strHTML)
    setInnerHTML('#search-words-list', strHTML)
}

function onOpenMeme(imgId) {
    hideElement('.img-gallery')
    hideElement('.about-content')
    showElement('.memo-container')
    initMemeByImgId(imgId)
}

function onOpenGallery() {    
    renderImageGallery()
    hideElement('.memo-container')
    showElement('.img-gallery')
    if(isScreenWidthEquel(600)!== 1)
        showElement('.about-content')
}

function onSearchImg(ev) {
    ev.preventDefault();
    const filterWord  = getInputValue('.search-word');
    setInputValue('.search-word','');
    setFilterWord(filterWord);
    renderImageGallery();
}