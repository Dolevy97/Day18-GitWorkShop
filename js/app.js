'use strict'

var gElBall1 = document.querySelector('.ball1')
var gElBall2 = document.querySelector('.ball2')
var gElBody = document.querySelector('body')

var gBallSize = 100
var gBall2Size = 100

var gInterval
var gTimeout

function resetGame() {
    gBallSize = 100
    gElBall1.style.width = 100 + 'px'
    gElBall1.style.height = 100 + 'px'
    gElBall1.style.backgroundColor = 'skyblue'
    gElBall1.innerHTML = gBallSize

    gBall2Size = 100
    gElBall2.style.width = 100 + 'px'
    gElBall2.style.height = 100 + 'px'
    gElBall2.style.backgroundColor = 'cadetblue'
    gElBall2.innerHTML = gBall2Size

    gElBody.style.backgroundColor = '#252525'
}

function onBallClick(elBall, maxDiameter) {
    if (gBallSize >= maxDiameter) gBallSize = 100
    gBallSize += getRandomInt(20, 61)
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    elBall.innerHTML = gBallSize
    elBall.style.backgroundColor = getRandomColor()
}

function onBall2Click(elBall, maxDiameter) {
    if (gBall2Size >= maxDiameter) gBall2Size = 100
    gBall2Size += getRandomInt(20, 61)
    elBall.style.width = gBall2Size + 'px'
    elBall.style.height = gBall2Size + 'px'
    elBall.innerHTML = gBall2Size
    elBall.style.backgroundColor = getRandomColor()
}

function onBall3Click() {
    var ball1BackgroundColor = (gElBall1.style.backgroundColor || 'skyblue')
    var ball2BackgroundColor = (gElBall2.style.backgroundColor || 'cadetblue')

    var tempSize = gBallSize
    var tempColor = ball1BackgroundColor

    gBallSize = gBall2Size
    gElBall1.style.width = gBall2Size + 'px'
    gElBall1.style.height = gBall2Size + 'px'
    gElBall1.innerHTML = gBall2Size
    gElBall1.style.backgroundColor = ball2BackgroundColor

    gBall2Size = tempSize
    gElBall2.style.width = tempSize + 'px'
    gElBall2.style.height = tempSize + 'px'
    gElBall2.innerHTML = tempSize
    gElBall2.style.backgroundColor = tempColor
}

function onBall4Click() {
    gBallSize -= getRandomInt(20, 60)
    if (gBallSize < 100) gBallSize = 100
    gElBall1.style.width = gBallSize + 'px'
    gElBall1.style.height = gBallSize + 'px'
    gElBall1.innerHTML = gBallSize

    gBall2Size -= getRandomInt(20, 60)
    if (gBall2Size < 100) gBall2Size = 100
    gElBall2.style.width = gBall2Size + 'px'
    gElBall2.style.height = gBall2Size + 'px'
    gElBall2.innerHTML = gBall2Size
}

function onBall5Click() {
    gElBody.style.backgroundColor = getRandomColor()
}

function onBall6Click() {
    resetGame()
}

function onBall6hover() {
    gTimeout = setTimeout(() => {
        var cycle = 0
        gInterval = setInterval(() => {
            if (cycle === 10) {
                clearInterval(gInterval)
                return
            }
            onBallClick(gElBall1, 350)
            onBall2Click(gElBall2, 400)
            onBall3Click()
            onBall4Click()
            cycle++
        }, 2000)
    }, 2000)
}

function onBall6Leave() {
    clearTimeout(gTimeout)
    clearInterval(gInterval)
}