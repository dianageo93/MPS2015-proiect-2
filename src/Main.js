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
    lineLength: 2,
    color: '#FFFFFF'
};

function fillOptions(options) {
    options.depth = options.d || defaultOptions.depth;
    options.startAngle = options.sa || defaultOptions.startAngle;
    options.leftAngle = options.la || defaultOptions.leftAngle;
    options.rightAngle = options.ra || defaultOptions.rightAngle;
    options.x = options.x || defaultOptions.x;
    options.y = options.y || defaultOptions.y;
    options.rules = options.r || defaultOptions.rules;
    options.start = options.s || defaultOptions.start;
    options.lineLength = options.ll || defaultOptions.lineLength;
    options.color = options.c || defaultOptions.color;
}

window.addEventListener('load', function () {
    var drawUtils = new DrawUtils();
    seeds.forEach(function(seed) {
        var minX = seed.a[0];
        var maxX = seed.a[1];
        var minY = seed.a[2];
        var maxY = seed.a[3];

        for (var i = 0; i < seed.c; i++) {
            var options = seed.lsys[Math.floor(Math.random() * seed.lsys.length)];
            fillOptions(options);
            options.x = minX + Math.floor((maxX - minX) * Math.random());
            options.y = minY + Math.floor((maxY - minY) * Math.random());

            var lsys = new LSystem(options);
            var tree = lsys.generate();

            drawUtils.draw(tree, options);
        }
    });
});
