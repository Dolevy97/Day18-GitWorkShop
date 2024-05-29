function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setTime() {
    ++gTotalSeconds
    gElSecs.innerHTML = pad(gTotalSeconds % 60)
    gElMins.innerHTML = pad(parseInt(gTotalSeconds / 60))
}

function pad(val) {
    var str = val + ''
    if (str.length < 2) return "0" + str
    else return str
}