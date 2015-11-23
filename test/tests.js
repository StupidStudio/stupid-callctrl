var test = require('tape');
var iterator = require('../iterator');

test('Gets next item', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[0];
	current = iterator.next(current, collection);
	t.equal(current, collection[1]);
});