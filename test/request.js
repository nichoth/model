var test = require('tape');
var Request = require('../request');

test('request model', function (t) {
    t.plan(1);
    var evs = [
        ['start', { id: 'abc' }],
        ['resolve', { id: 'abc' }]
    ];
    var states = evs.reduce(function (acc, ev) {
        var state = Request.update[ev[0]](acc[acc.length - 1], ev[1]);
        return acc.concat(state);
    }, [Request()]);

    t.deepEqual(states, [
        { resolving: [] },
        { resolving: [{ id: 'abc' }] },
        { resolving: [] }
    ], 'should return new states');
});

