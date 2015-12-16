// L-System generating class

var defaultOptions = {
    depth: 5,
    leftAngle: 22,
    rightAngle: 22,
    rules: {
        'F':'FF',
        'X':'F-[[X]+X]+F[+FX]-X'
    },
    start: 'X'
};

function LSystem(options) {
    this.depth = options.depth;
    this.leftAngle = options.leftAngle;
    this.rightAngle = options.rightAngle;
    this.rules = options.rules;
    this.start = options.start;
}

LSystem.prototype.generate = function () {
    var current = this.start;
    for (var i = 0; i < this.depth; i++) {
        var tmp = '';
        for (var j = 0; j < current.length; j++) {
            if (this.rules[current[j]]) {
                tmp += this.rules[current[j]];
            }
            else {
                tmp += current[j];
            }
        }
        current = tmp;
    }
    return current;
}
