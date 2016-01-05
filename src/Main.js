var defaultOptions = {
    depth: 5,
    startAngle: 0,
    leftAngle: 22,
    rightAngle: 22,
    x: 50,
    y: 100,
    rules: {
        'F':'FF',
        'X':'F-[[X]+X]+F[+FX]-X'
    },
    start: 'X',
    lineLength: 2
};

window.addEventListener('load', function () {
    var drawUtils = new DrawUtils();
    seed.forEach(function(options) {
        options.depth = options.depth || defaultOptions.depth;
        options.startAngle = options.startAngle || defaultOptions.startAngle;
        options.leftAngle = options.leftAngle || defaultOptions.leftAngle;
        options.rightAngle = options.rightAngle || defaultOptions.rightAngle;
        options.x = options.x || defaultOptions.x;
        options.y = options.y || defaultOptions.y;
        options.rules = options.rules || defaultOptions.rules;
        options.start = options.start || defaultOptions.start;
        options.lineLength = options.lineLength || defaultOptions.lineLength;

        var lsys = new LSystem(options);
        var tree = lsys.generate();

        drawUtils.draw(tree, options);
    });
});
