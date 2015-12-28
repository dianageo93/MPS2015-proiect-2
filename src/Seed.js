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

var options1 = JSON.parse(JSON.stringify(defaultOptions));
options1.depth = 4;
options1.rules = {'F': 'FF+[+F-F-F+F]-[-F+F-F]'};
options1.start = 'F';

var options2 = JSON.parse(JSON.stringify(defaultOptions));
options2.depth = 7;
options2.rules.X = 'F-[[X]+X]+F[+FX]-X'
options2.lineLength = 25;
