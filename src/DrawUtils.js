// Draw utils

function State (angle, startCoords, specs) {
    this.angle = angle;
    this.startCoords = startCoords;
}

function DrawUtils () {
    var canvas = document.getElementById('forest');
    this.context = canvas.getContext('2d');
    this.stateStack = [];
    this.stateStack.push(new State(0, {x: canvas.clientWidth / 2, y: canvas.clientHeight}));
}

DrawUtils.prototype.draw = function (lSystem) {
}

function tryParameters () {
    console.log("okay");
}
