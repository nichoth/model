var xtend = require('xtend');
var Crud = require('./lib/crud');

function Data (indexBy) {
    var crud = Crud(indexBy);
    function data () {
        return { data: {} };
    }
    data.update = ['get', 'edit', 'add', 'delete']
        .reduce(function (acc, method) {
            acc[method] = function (state, ev) {
                return xtend(state, {
                    data: crud[method](state.data, ev)
                });
            };
            return acc;
        }, {})
    ;
    return data;
}

module.exports = Data;
