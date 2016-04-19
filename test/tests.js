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

test('Once: Passing arguments', function (t) {
    t.plan(1);
	var once = callctrl.once(function(_value){
		t.equal(_value, 'hello world');
	});
	once.trigger('hello world');
});

test('Shift: Passing arguments', function (t) {
    t.plan(2);
    var shift = callctrl.shift(function(_value){
		t.equal(_value, 'hello world - 1');
	}, function (_value){
		t.equal(_value, 'hello world - 2');
	});
	shift.alpha('hello world - 1');
	shift.beta('hello world - 2');
});

test('Toggle: Passing arguments', function (t) {
    t.plan(2);
	var toggle = callctrl.toggle(function(_value){
		t.equal(_value, 'hello world - 1');
	}, function(_value){
		t.equal(_value, 'hello world - 2');
	});
	toggle.trigger('hello world - 1'); // alpha
	toggle.trigger('hello world - 2'); // beta
});

test('Passing multiple arguments', function (t) {
    t.plan(3);
	var once = callctrl.once(function(_a,_b,_c){
		t.equal(_a, 'a');
		t.equal(_b, 'b');
		t.equal(_c, 'c');
	});
	once.trigger('a','b','c');
});