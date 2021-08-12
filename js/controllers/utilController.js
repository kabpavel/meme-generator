'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];

function setInnerText(querySelector, innerText) {
    document.querySelector(querySelector).innerText = innerText;
}

function setInnerHTML(querySelector, innerHTML) {
    document.querySelector(querySelector).innerHTML = innerHTML;
}

function setSrc(querySelector, src) {
    document.querySelector(querySelector).src = src;
}

function getInnerText(querySelector) {
    return document.querySelector(querySelector).innerText;
}

function getInnerHTML(querySelector) {
    return document.querySelector(querySelector).innerHTML;
}

function setHidden(querySelector, isHidden = false) {
   document.querySelector(querySelector).hidden = isHidden;
}

function getInputValue(querySelector) {
    return document.querySelector(querySelector).value;
}

function hideElement(querySelector) {
    var el = document.querySelector(querySelector)
    el.style.display = "none";
}

function showElement(querySelector) {
    var el = document.querySelector(querySelector)
    if (el.classList.contains('flex')) {
        el.style.display = 'flex'
    } else if (el.classList.contains('grid')) {
        el.style.display = 'grid'
    } else {
        el.style.display = 'block';
    }
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onMouseDown)
    gElCanvas.addEventListener('mousemove', draw)
    gElCanvas.addEventListener('mouseup', onMouseUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onMouseDown)
    gElCanvas.addEventListener('touchmove', draw)
    gElCanvas.addEventListener('touchend', onMouseUp)
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}