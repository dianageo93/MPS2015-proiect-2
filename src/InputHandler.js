window.addEventListener('load', onloadHandler, false);
function onloadHandler () {
    // bind ENTER key handler to Start button
    document.onkeyup = function(event) {
        var keyCode = (event === null ? window.event.keyCode :
                event.keyCode);
        if (keyCode === 13) {
            tryParameters();
        }
    };
}

function extractParams () {
    var options = defaultOptions;
    if (document.getElementById('depth').value) {
        options.depth = parseInt(document.getElementById('depth').value);
    }
    if (document.getElementById('leftAngle').value) {
        options.leftAngle = document.getElementById('leftAngle').value;
    }
    if (document.getElementById('rightAngle').value) {
        options.rightAngle = document.getElementById('rightAngle').value;
    }
    if (document.getElementById('start').value) {
        options.start = document.getElementById('start').value;
    }
    if (document.getElementById('lineLength').value) {
        options.lineLength = document.getElementById('lineLength').value;
    }

    var changed = false;
    for (var i = 1; i <=3; i++) {
        var rule = document.getElementById('rule' + i).value;
        if (rule && rule.length !== 0) {
            if (!changed) {
                changed = true;
                options.rules = {};
            }
            rule = rule.split('=');
            var x = rule[0];
            options.rules[x] = rule[1];
        }
    }

    return options;
}

function tryParameters () {
    var options = extractParams();
    var lsys = new LSystem(options);
    var drawUtils = new DrawUtils(options);
    var tree = lsys.generate();

    drawUtils.draw(tree, options);
}
