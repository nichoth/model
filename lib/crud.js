var xtend = require('xtend');

function Crud (indexBy) {
    return {
        get: function (state, ev) {
            var map = {};
            for (var i = 0; i < ev.length; i++) {
                var elmt = ev[i];
                map[elmt[indexBy]] = elmt;
            }
            return map;
        },
        edit: function (state, ev) {
            var newData = {};
            newData[ev[indexBy]] = ev;
            return xtend(state, newData);
        },
        add: function (state, ev) {
            var newData = {};
            newData[ev[indexBy]] = ev;
            return xtend(state, newData);
        },
        delete: function (state, ev) {
            if (!state[ev[indexBy]]) return state;
            var newState = xtend(state);
            delete newState[ev[indexBy]];
            return newState;
        }
    };
}

module.exports = Crud;
