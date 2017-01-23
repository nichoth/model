var Ev = require('event-manifest/event');

// return a function from an object mapping
// event types to functions
function Update (obj) {
    return function update (state, ev) {
        var fn = obj[Ev.type(ev)];
        return fn(state[Ev.type(ev)], Ev.data(ev));
    };
}

module.exports = Update;
