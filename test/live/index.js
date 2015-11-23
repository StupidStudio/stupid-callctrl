var callctrl = require('../../callctrl');
// Once
var once = callctrl.once(function(){
	console.log("Call my once");
});
once.trigger();
once.trigger();
once.reset();
once.trigger();

//shift
var shift = callctrl.shift(function(){
	console.log('Shift Alpha');
}, function (){
	console.log('Shift Beta');
});
shift.alpha();
shift.alpha();
shift.beta();
shift.beta();
shift.alpha();

//toggle
var toggle = callctrl.toggle(function(){
	console.log("Toggle Alpha");
}, function(){
	console.log("Toggle Beta");
});
toggle.trigger();
toggle.trigger();
toggle.trigger();
toggle.reset();
toggle.trigger();