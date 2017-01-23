var xtend = require('xtend');
// var Ev = require('event-manifest/event');
// var Update = require('./lib/update');
var Request = require('./request');
var Errors = require('./errors');
var Data = require('./data');

function Model (indexBy) {
    var Crud = Data(indexBy);
    function model () {
        return xtend(Request(), Errors(), Crud());
    }
    model.update = xtend(Request.update, Errors.update, Crud.update);
    return model;
}

module.exports = Model;

