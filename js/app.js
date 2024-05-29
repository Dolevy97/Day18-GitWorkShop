'use strict'

var gElBall1 = document.querySelector('.ball1')
var gElBall2 = document.querySelector('.ball2')
var gElBody = document.querySelector('body')
var gElUndo = document.querySelector('.btn-undo')
var gElRedo = document.querySelector('.btn-redo')
var gElCounter = document.querySelector('.moves-counter')

var gBallSize = 100
var gBall2Size = 100
var moveCounter = 0

var gInterval
var gTimeout

var gGameStates = []
var gRedoGameStates = []

saveState()

function saveState() {
    var state = {}
    state.ball1 = {
        size: gBallSize,
        width: (gElBall1.style.width || gBallSize + 'px'),
        height: (gElBall1.style.height || gBallSize + 'px'),
        color: (gElBall1.style.backgroundColor || 'skyblue'),
        text: gElBall1.innerHTML
    }
    state.ball2 = {
        size: gBall2Size,
        width: (gElBall2.style.width || gBall2Size + 'px'),
        height: (gElBall2.style.height || gBall2Size + 'px'),
        color: (gElBall2.style.backgroundColor || 'cadetblue'),
        text: gElBall2.innerHTML
    }
    state.backgroundColor = (gElBody.style.backgroundColor || '#252525')
    gGameStates.push(state)
    if (gGameStates.length > 1) {
        gElUndo.disabled = false
        moveCounter++
        gElCounter.innerHTML = moveCounter
    }
}

function onUndo() {
    if (gGameStates.length < 2) return
    gRedoGameStates.push(gGameStates.pop())

    if (gGameStates.length < 2) gElUndo.disabled = true

    var latestState = gGameStates[gGameStates.length - 1]

    gBallSize = latestState.ball1.size
    gElBall1.style.width = latestState.ball1.width
    gElBall1.style.height = latestState.ball1.height
    gElBall1.style.backgroundColor = latestState.ball1.color
    gElBall1.innerHTML = latestState.ball1.text

    gBall2Size = latestState.ball2.size
    gElBall2.style.width = latestState.ball2.width
    gElBall2.style.height = latestState.ball2.height
    gElBall2.style.backgroundColor = latestState.ball2.color
    gElBall2.innerHTML = latestState.ball2.text

    gElBody.style.backgroundColor = latestState.backgroundColor
    gElRedo.disabled = false
}

function onRedo() {
    if (!gRedoGameStates.length) return
    var latestState = gRedoGameStates[gRedoGameStates.length - 1]

    gBallSize = latestState.ball1.size
    gElBall1.style.width = latestState.ball1.width
    gElBall1.style.height = latestState.ball1.height
    gElBall1.style.backgroundColor = latestState.ball1.color
    gElBall1.innerHTML = latestState.ball1.text

    gBall2Size = latestState.ball2.size
    gElBall2.style.width = latestState.ball2.width
    gElBall2.style.height = latestState.ball2.height
    gElBall2.style.backgroundColor = latestState.ball2.color
    gElBall2.innerHTML = latestState.ball2.text

    gElBody.style.backgroundColor = latestState.backgroundColor
    gGameStates.push(gRedoGameStates.pop())
    gElUndo.disabled = false
    if (gRedoGameStates.length < 1) gElRedo.disabled = true
}

function onBallClick(elBall, maxDiameter) {
    if (gBallSize >= maxDiameter) gBallSize = 100
    gBallSize += getRandomInt(20, 61)
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    elBall.innerHTML = gBallSize
    elBall.style.backgroundColor = getRandomColor()
    saveState()
}

function onBall2Click(elBall, maxDiameter) {
    if (gBall2Size >= maxDiameter) gBall2Size = 100
    gBall2Size += getRandomInt(20, 61)
    elBall.style.width = gBall2Size + 'px'
    elBall.style.height = gBall2Size + 'px'
    elBall.innerHTML = gBall2Size
    elBall.style.backgroundColor = getRandomColor()
    saveState()
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
    saveState()
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
    saveState()
}

function onBall5Click() {
    gElBody.style.backgroundColor = getRandomColor()
    saveState()
}

function onBall6Click() {
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

    moveCounter = 0
    gElCounter.innerHTML = moveCounter
    gElRedo.disabled = true
    gElUndo.disabled = true

    gGameStates = []
    gRedoGameStates = []
    saveState()
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