var test = require('tape');
var iterator = require('../iterator');

test('Gets next item', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[0];
	current = iterator.next(current, collection);
	t.equal(current, collection[1]);
});

test('Gets first item if current is last', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[3];
	current = iterator.next(current, collection);
	t.equal(current, collection[0]);
});

test('Gets previous item', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[1];
	current = iterator.prev(current, collection);
	t.equal(current, collection[0]);
});

test('Gets last item if current is last', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[0];
	current = iterator.prev(current, collection);
	t.equal(current, collection[3]);
});

test('Returns next or false', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[2];
	current = iterator.nextOrFalse(current, collection);
	t.equal(current, collection[3]);
	current = iterator.nextOrFalse(current, collection);
	t.equal(current, false);
});

test('Returns prev or false', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[1];
	current = iterator.prevOrFalse(current, collection);
	t.equal(current, collection[0]);
	current = iterator.prevOrFalse(current, collection);
	t.equal(current, false);
});

test('Is first', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	t.equal(iterator.isFirst(collection[0], collection), true);
	t.equal(iterator.isFirst(collection[1], collection), false);
});

test('Is last', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	t.equal(iterator.isLast(collection[3], collection), true);
	t.equal(iterator.isLast(collection[2], collection), false);
});

test('Adds item to collection if doesnt exist', function (t) {
    t.plan(2);
    var obj = {name: 'five'};
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	iterator.add(obj, collection);
	t.equal(obj, collection[4]);
	iterator.add(obj, collection);
	t.equal(collection.length, 5);
});

test('Removes item from collection if it exist', function (t) {
    t.plan(2);
    var obj = {name: 'five'};
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}, obj];
	iterator.remove(obj, collection);
	t.equal(collection.length, 4);
	iterator.remove(obj, collection);
	t.equal(collection.length, 4);
});