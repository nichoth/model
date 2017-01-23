var xtend = require('xtend');
var findIndex = require('@f/find-index');
var deepEqual = require('deep-equal');

function Request () {
    return {
        resolving: []
    };
}

Request.update = {
    start: function (state, ev) {
        return xtend(state, {
            resolving: state.resolving.concat([ev])
        });
    },
    resolve: function (state, ev) {
        var i = findIndex(state.resolving, function (req) {
            return deepEqual(req, ev);
        });
        var newArr = [].concat(state.resolving);
        newArr.splice(i, 1);
        return xtend(state, {
            resolving: newArr
        });
    }
};

module.exports = Request;

