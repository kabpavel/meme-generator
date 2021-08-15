'use strict'

var gKeywords = {
    'politic': 3,
    'actor': 1,
    'puppy': 1,
    'cute': 1,
    'couple': 1,
    'baby': 1,
    'dog': 1,
    'cat': 1,
    'kid': 1,
    'happy': 1,
    'smile': 1,
    'since': 1,
    'movie': 1,
    'curious': 1
}

var gFilterWord = 'all'

var gImgs =
    [{ id: 101, url: 'img/1.jpg', keywords: ['politic', 'actor', 'aggressive'] },
    { id: 102, url: 'img/2.jpg', keywords: ['puppy', 'cute', 'couple'] },
    { id: 103, url: 'img/3.jpg', keywords: ['cute', 'baby', 'dog', 'kid', 'couple'] },
    { id: 104, url: 'img/4.jpg', keywords: ['cat', 'cute'] },
    { id: 105, url: 'img/5.jpg', keywords: ['cute', 'happy', 'kid'] },
    { id: 106, url: 'img/6.jpg', keywords: ['since'] },
    { id: 107, url: 'img/7.jpg', keywords: ['happy', 'cute', 'curious', 'kid'] },
    { id: 108, url: 'img/8.jpg', keywords: ['happy', 'smile', 'actor'] },
    { id: 109, url: 'img/9.jpg', keywords: ['cute', 'happy', 'smile', 'kid'] },
    { id: 110, url: 'img/10.jpg', keywords: ['happy', 'smile', 'politic'] },
    { id: 111, url: 'img/11.jpg', keywords: ['aggressive', 'couple'] },
    { id: 112, url: 'img/12.jpg', keywords: ['actor', 'curious'] },
    { id: 113, url: 'img/13.jpg', keywords: ['happy', 'smart', 'actor' ] },
    { id: 114, url: 'img/14.jpg', keywords: ['actor', 'movie'] },
    { id: 115, url: 'img/15.jpg', keywords: ['actor', 'movie'] },
    { id: 116, url: 'img/16.jpg', keywords: ['happy', 'smile', 'actor', 'movie'] },
    { id: 117, url: 'img/17.jpg', keywords: ['politic'] },
    { id: 118, url: 'img/18.jpg', keywords: ['happy', 'movie', 'couple'] }];

function getImagesToDisplay() {
    if(gFilterWord === 'all') return gImgs

    return gImgs.filter((img) => {
        return  isItemExist(img.keywords, gFilterWord)
    });
}

function getImageById(imgId) {
    return gImgs.find(image => image.id === imgId)
}

function getSearchWords() {
    const words = []
    
    gImgs.forEach((line) => {
        line.keywords.forEach((word) => {
            if(!isItemExist(words, word)) {
                words.push(word)
            }
        })
    }) 
    
    return words
}

function setFilterWord(filterWord) {
    gFilterWord = filterWord
}
