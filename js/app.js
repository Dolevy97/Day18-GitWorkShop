'use strict'
var gBallSize = 100
var gBall2Size = 100


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
    var elBall1 = document.querySelector('.ball1')
    var elBall2 = document.querySelector('.ball2')

    var ball1BackgroundColor = (elBall1.style.backgroundColor || 'skyblue')
    var ball2BackgroundColor = (elBall2.style.backgroundColor || 'cadetblue')

    var tempSize = gBallSize
    var tempColor = ball1BackgroundColor

    gBallSize = gBall2Size
    elBall1.style.width = gBall2Size + 'px'
    elBall1.style.height = gBall2Size + 'px'
    elBall1.innerHTML = gBall2Size
    elBall1.style.backgroundColor = ball2BackgroundColor

    gBall2Size = tempSize
    elBall2.style.width = tempSize + 'px'
    elBall2.style.height = tempSize + 'px'
    elBall2.innerHTML = tempSize
    elBall2.style.backgroundColor = tempColor
}