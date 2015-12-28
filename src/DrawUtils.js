// Draw utils

function State (angle, startCoords, specs) {
    this.angle = angle;
    this.startCoords = {};
    this.startCoords.x = startCoords.x;
    this.startCoords.y = startCoords.y;
    this.specs = specs;
}

function DrawUtils (options) {
    var canvas = document.getElementById('forest');
    this.context = canvas.getContext('2d');
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.stateStack = [];
    this.stateStack.push(new State(
                0,
                {x: canvas.clientWidth / 2, y: canvas.clientHeight},
                {lineLength: options['lineLength']}));
}

DrawUtils.prototype.draw = function (lSystem, options) {
    var currState = this.stateStack.pop();
    for (var i = 0; i < lSystem.length; i++) {
        if (lSystem[i] === '[') {
            this.stateStack.push(new State(currState.angle,
                        currState.startCoords, currState.specs));
        } else if (lSystem[i] === ']') {
            currState = this.stateStack.pop();
        } else if (lSystem[i] === '+') {
            currState.angle -= options.rightAngle;
        } else if (lSystem[i] === '-') {
            currState.angle += options.leftAngle;
        } else if (lSystem[i] === 'F') {
            this.drawLine(currState);
        }
    }
    console.log("gata");
}

DrawUtils.prototype.drawLine = function (state) {
    this.context.beginPath();
    this.context.moveTo(state.startCoords.x, state.startCoords.y);

    var angleToRads = state.angle * Math.PI / 180;
    var deltax = state.specs.lineLength * Math.sin(angleToRads);
    var deltay = state.specs.lineLength * Math.cos(angleToRads);
    var newx = state.startCoords.x - deltax;
    var newy = state.startCoords.y - deltay;

    this.context.lineTo(newx, newy);
    this.context.closePath();
    this.context.stroke();

    state.startCoords.x = newx;
    state.startCoords.y = newy;
}

window.addEventListener('load', onCanvasResize, false);
window.addEventListener('resize', onCanvasResize, false);

function onCanvasResize () {
    var canvas = document.getElementById('forest');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
