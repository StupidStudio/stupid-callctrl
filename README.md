# Stupid Call Controller
A call controller to control how to call functions.

## usage

```javascript

var callctrl = require('stupid-callctrl');

// Once
var once = callctrl.once(function(){
	console.log("Call my once");
});
once.trigger(); // trigger
once.trigger(); // doesn't trigger
once.reset(); // reset
once.trigger(); // trigger

//shift
var shift = callctrl.shift(function(){
	console.log('Shift Alpha');
}, function (){
	console.log('Shift Beta');
});
shift.alpha(); // trigger
shift.alpha(); // doesn't trigger
shift.beta(); // trigger
shift.beta(); // doesn't trigger
shift.alpha(); // trigger

//toggle
var toggle = callctrl.toggle(function(){
	console.log("Toggle Alpha");
}, function(){
	console.log("Toggle Beta");
});
toggle.trigger(); // trigger Alpha
toggle.trigger(); // trigger Beta
toggle.trigger(); // trigger Alpha
toggle.reset(); // resets
toggle.trigger(); // trigger Alpha

```