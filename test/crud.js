var test = require('tape');
var Crud = require('../lib/crud');

test('crud functions', function (t) {
    t.plan(4);
    var crud = Crud('id');

    var get = crud.get({}, [{id: 'abc'}]);
    t.deepEqual(get, { abc: {id: 'abc'} }, 'get');
    var edit = crud.edit(get, {id: 'abc', test: 'test'});
    t.deepEqual(edit, {abc: {id: 'abc', test: 'test' }}, 'edit');
    var add = crud.add(edit, {id: 'd'});
    t.deepEqual(add, {abc: {id: 'abc', test: 'test'}, d: {id: 'd'}},
        'add');
    var del = crud.delete(add, {id: 'abc'});
    t.deepEqual(del, {'d': {id: 'd'}}, 'delete');
});

