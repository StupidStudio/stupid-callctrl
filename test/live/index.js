var callctrl = require('../../callctrl');
// Once
var once = callctrl.once(function(){
	console.log("Call my once");
	return "text once";
});
console.log(once.trigger());
console.log(once.trigger());
once.reset();
console.log(once.trigger()); 

//shift
var shift = callctrl.shift(function(){
	console.log('Shift Alpha');
	return "text shift alpha";
}, function (){
	console.log('Shift Beta');
	return "text shift beta";
});
console.log(shift.alpha());
console.log(shift.alpha());
console.log(shift.beta());
console.log(shift.beta());
console.log(shift.alpha());

//toggle
var toggle = callctrl.toggle(function(){
	console.log("Toggle Alpha");
	return "text toggle alpha";
}, function(){
	console.log("Toggle Beta");
	return "text toggle beta";
});
console.log(toggle.trigger());
console.log(toggle.trigger());
console.log(toggle.trigger());
toggle.reset();
console.log(toggle.trigger());