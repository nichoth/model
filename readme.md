# model

Functions for reducing a log of events into application state.

## Api

`index.js` consumes the folowing events

```js
[
    'start',
    'resolve',
    'pushError',
    'shiftError',
    'get',
    'edit',
    'add',
    'delete'
];
```

## example

```js
var test = require('tape');
var Model = require('../');

test('compose models', function (t) {
    t.plan(1);
    var TestModel = Model('id');
    var evs = [
        ['start', { op: 'get' }],
        ['get', [{ id: 'a' }]],
        ['resolve', { op: 'get' }],
        ['pushError', { test: 'test' }]
    ];

    var states = evs.reduce(function (acc, ev) {
        var type = ev[0];
        var fn = TestModel.update[type];
        var state = fn(acc[acc.length - 1], ev[1]);
        return acc.concat(state);
    }, [TestModel()]);

    t.deepEqual(states, [{
        resolving: [],
        errors: [],
        data: {}
    }, {
        resolving: [{ op: 'get' }],
        errors: [],
        data: {}
    }, {
        resolving: [{ op: 'get' }],
        errors: [],
        data: { a: { id: 'a' } }
    }, {
        resolving: [],
        errors: [],
        data: { a: { id: 'a' } }
    }, {
        resolving: [],
        errors: [{ test: 'test' }],
        data: { a: { id: 'a' } }
    }], 'should compose reduce functions');
});
```
