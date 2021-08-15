'use strict'

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

// function hideElement(querySelector) {
//     const el = document.querySelector(querySelector)
//     el.style.display = "none";
// }

function hideElement(querySelector) {
    addClass(querySelector, "hide")
}

function showElement(querySelector) {
    removeClass(querySelector, "hide")
}

// function showElement(querySelector) {
//     const el = document.querySelector(querySelector)
//     if (el.classList.contains('flex')) {
//         el.style.display = 'flex'
//     } else if (el.classList.contains('grid')) {
//         el.style.display = 'grid'
//     } else {
//         el.style.display = 'block';
//     }
// }

function removeClass(querySelector, classToRemove) {
    const el = document.querySelector(querySelector);
    el.classList.remove(classToRemove);
}

function addClass(querySelector, classToAdd) {
    const el = document.querySelector(querySelector);
    el.classList.add(classToAdd);

}

var gPressedEnter = false;

function addKeydownEventListener() {
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

function addSubmitEventListenerToForms(querySelectors) {
    //loop through forms
    for (let i = 0; i < querySelectors.length; i++) {

        const el = document.querySelector(querySelectors[i])

        //listen to submit event
        el.addEventListener('submit', function (e) {
            //if user just pressed enter, stop the submit event
            if (gPressedEnter === true) {
                e.preventDefault();
                return false;
            }
        })
    }
}

function isScreenWidthEquel(width) {
    if (window.innerWidth > width) return 1
    else if (window.innerWidth < width) return -1
    return 0
}
