var xtend = require('xtend');

function Errors () {
    return {
        errors: []
    };
}

Errors.update = {
    pushError: function (state, ev) {
        return xtend(state, { errors: state.errors.concat([ev]) });
    },
    shiftError: function (state, ev) {
        return xtend(state, {
            errors: state.errors.slice(1)
        });
    }
};

module.exports = Errors;

