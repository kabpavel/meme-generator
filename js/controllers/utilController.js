'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];

function setInnerText(querySelector, innerText) {
    document.querySelector(querySelector).innerText = innerText;
}

function setInnerHTML(querySelector, innerHTML) {
    if (!innerHTML) return
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

function setInputValue(querySelector, txt) {
    document.querySelector(querySelector).value = txt;
}

function hideElement(querySelector) {
    const el = document.querySelector(querySelector)
    el.style.display = "none";
}

function showElement(querySelector) {
    const el = document.querySelector(querySelector)
    if (el.classList.contains('flex')) {
        el.style.display = 'flex'
    } else if (el.classList.contains('grid')) {
        el.style.display = 'grid'
    } else {
        el.style.display = 'block';
    }
}

function removeClass(querySelector, classToRemove) {
    const el = document.querySelector(querySelector);
    el.classList.remove(classToRemove);
}

function addClass(querySelector, classToAdd) {
    const el = document.querySelector(querySelector);
    el.classList.Add(classToAdd);
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
    let pos = {
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

var gPressedEnter = false;

function addKeydownEventListenerToAllForms() {
    window.addEventListener('keydown', function (event) {

        //set default value for variable that will hold the status of keypress
        gPressedEnter = false;

        //if user pressed enter, set the variable to true
        if (event.keyCode === 13)
            gPressedEnter = true;

        //we want forms to disable submit for a tenth of a second only
        setTimeout(function () {
            gPressedEnter = false;
        }, 100)
    })
}

// addSubmitEventListenerToAllForms();

// function addSubmitEventListenerToAllForms() {
//     //find all forms
//     const forms = document.getElementsByTagName('form')

//     //loop through forms
//     for (let i = 0; i < forms.length; i++) {
//         //listen to submit event
//         forms[i].addEventListener('submit', function (e) {
//             //if user just pressed enter, stop the submit event
//             if (gPressedEnter == true) {
//                 e.preventDefault();
//                 return false;
//             }
//         })
//     }
// }

function addSubmitEventListenerToForm(querySelector) {
    console.log('addSubmitEventListenerToForm', addSubmitEventListenerToForm)
    //find all forms
    const el = document.querySelector(querySelector)

    //listen to submit event
    el.addEventListener('submit', function (e) {
        //if user just pressed enter, stop the submit event
        if (gPressedEnter === true) {
            e.preventDefault();
            return false;
        }
    })

}

function isScreenWidthEquel(width) {
    console.log('window.innerWidth',window.innerWidth) 
    if(window.innerWidth > width) return 1
    else if (window.innerWidth < width) return -1
    return 0
}
