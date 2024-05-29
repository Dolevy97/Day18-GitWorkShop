'use strict'
var ball1Size = 100

function onBallClick(elBall) {
    ball1Size = ball1Size + 50
    elBall.style.width = ball1Size + 'px'
    elBall.style.height = ball1Size + 'px'
    elBall.innerHTML = ball1Size
    if (ball1Size > 400) {
        ball1Size = 100
        elBall.style.width = ball1Size + 'px'
        elBall.style.height = ball1Size + 'px'
        elBall.innerHTML = ball1Size
    }
}
