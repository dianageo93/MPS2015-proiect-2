var seed = [
    // mountain
    {depth: 4, rules: {F: 'F-F+F+F-F'}, start: 'F', x: 1, y: 60, startAngle: -90, leftAngle: 90, rightAngle: 90, lineLength: 6},
    {depth: 3, rules: {F: 'F-F+F+F-F'}, start: 'F', x: 5, y: 60, startAngle: -90, leftAngle: 90, rightAngle: 90, lineLength: 6},
    {depth: 3, rules: {F: 'F-F+F+F-F'}, start: 'F', x: 10, y: 60, startAngle: -90, leftAngle: 90, rightAngle: 90, lineLength: 9},
    // small bush
    {depth: 4, rules: {F: 'FF+[+F-F-F+F]-[-F+F-F]'}, start: 'F', x: 20},
    // large tree
    {depth: 7, rules: {X: 'F-[[X]+X]+F[+FX]-X', F: 'FF'}, lineLength: 1, x: 40}
];
