// Draw utils

function State (angle, startCoords, specs) {
    this.angle = angle;
    this.startCoords = {};
    this.startCoords.x = startCoords.x;
    this.startCoords.y = startCoords.y;
    this.specs = specs;
}

function DrawUtils () {
    this.canvas = document.getElementById('forest');
    this.context = this.canvas.getContext('2d');

    // gradient fill
    var startY = this.canvas.clientHeight * 0.6;
    var endY = this.canvas.clientHeight;
    var myGradient = this.context.createLinearGradient(0, startY, 0, endY);
    myGradient.addColorStop(0, 'rgba(8, 2, 14, 0.76)');
    myGradient.addColorStop(1, 'rgba(116, 108, 123, 0.76)');
    this.context.fillStyle = myGradient;
    this.context.fillRect(0, startY, this.canvas.clientWidth, endY);
}

DrawUtils.prototype.draw = function (lSystem, options) {
    var startState = new State(
        options.startAngle,
        {
            x: this.canvas.clientWidth * options.x / 100,
            y: this.canvas.clientHeight * options.y / 100
        },
        {
            lineLength: options.lineLength
        }
    );
    this.stateStack = [];
    this.stateStack.push(startState);

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
            this.drawLine(currState, options.color);
        }
    }
    console.log('done');
}

DrawUtils.prototype.drawLine = function (state, color) {
    this.context.beginPath();
    this.context.moveTo(state.startCoords.x, state.startCoords.y);

    var angleInRads = state.angle * Math.PI / 180;
    var deltax = state.specs.lineLength * Math.sin(angleInRads);
    var deltay = state.specs.lineLength * Math.cos(angleInRads);
    var newx = state.startCoords.x - deltax;
    var newy = state.startCoords.y - deltay;

    this.context.lineTo(newx, newy);
    this.context.closePath();
    this.context.strokeStyle = color;
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
