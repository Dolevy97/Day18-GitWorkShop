'use strict'
var ball1Size = 100

function onBallClick(elBall, maxDiameter) {
    ball1Size = ball1Size + getRandomInt(20, 61)
    elBall.style.width = ball1Size + 'px'
    elBall.style.height = ball1Size + 'px'
    elBall.innerHTML = ball1Size
    elBall.style.backgroundColor = getRandomColor()
    if (ball1Size >= maxDiameter) {
        ball1Size = 100
        elBall.style.width = ball1Size + 'px'
        elBall.style.height = ball1Size + 'px'
        elBall.innerHTML = ball1Size
    }
}
