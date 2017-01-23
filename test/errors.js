var test = require('tape');
var Errors = require('../errors');

test('errors', function (t) {
    t.plan(1);
    var init = Errors();
    var evs = [
        ['pushError', 'test'],
        ['shiftError', 'test']
    ];
    var states = evs.reduce(function (acc, ev) {
        var state = Errors.update[ev[0]](acc[acc.length - 1], ev[1]);
        return acc.concat(state);
    }, [init]);

    t.deepEqual(states, [
        { errors: [] },
        { errors: ['test'] },
        { errors: [] }
    ], 'should return new states');
});

