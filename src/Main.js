var defaultOptions = {
    depth: 5,
    leftAngle: 22,
    rightAngle: 22,
    rules: {
        'F':'FF',
        'X':'F-[[X]+X]+F[+FX]-X'
    },
    start: 'X',
    lineLength: 2
};


window.addEventListener('load', function () {
    seed.forEach(function(options) {
        options.depth = options.depth || defaultOptions.depth;
        options.leftAngle = options.leftAngle || defaultOptions.leftAngle;
        options.rightAngle = options.rightAngle || defaultOptions.rightAngle;
        options.rules = options.rules || defaultOptions.rules;
        options.start = options.start || defaultOptions.start;
        options.lineLength = options.lineLength || defaultOptions.lineLength;

        var lsys = new LSystem(options);
        var drawUtils = new DrawUtils(options);
        var tree = lsys.generate();

        drawUtils.draw(tree, options);
    });
});
