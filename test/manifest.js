var test = require('tape');
var Model = require('../');
var createManifest = require('event-manifest/create-manifest');
var manifest = require('../manifest');

test('event manifest', function (t) {
    t.plan(1);
    var fromUpdate = createManifest(Model('id').update);
    t.deepEqual(fromUpdate, manifest, 'should match the update fns');
});

