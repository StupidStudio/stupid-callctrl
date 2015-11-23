var test = require('tape');
var callctrl = require('../callctrl');

test('Only call callback once until reset', function (t) {
    t.plan(2);
	var once = callctrl.once(function(){
		t.ok(true);
	});
	once.trigger();
	once.trigger();
	once.reset();
	once.trigger();
	once.trigger();
});

test('Only call callbacks once until shifted', function (t) {
    t.plan(2);
    var a = 0;
    var b = 0;
	var shift = callctrl.shift(function(){
		a++;
	}, function (){
		b++;
	});
	shift.alpha(); // alpha
	shift.alpha(); // nothing
	shift.beta(); // beta
	shift.beta(); // nothing
	shift.alpha(); // alpha
	t.equal(a, 2);
	t.equal(b, 1);
});

test('Toggle between callbacks, if reset call first callback', function (t) {
    t.plan(2);
    var a = 0;
    var b = 0;
	var toggle = callctrl.toggle(function(){
		a++;
	}, function(){
		b++;
	});
	toggle.trigger(); // alpha
	toggle.trigger(); // beta
	toggle.trigger(); // alpha
	toggle.reset();
	toggle.trigger(); // alpha
	t.equal(a, 3);
	t.equal(b, 1);
});