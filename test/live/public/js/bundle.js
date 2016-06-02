(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Call controller
 */
var callctrl = {
	/**
	 * Once (call a function once)
	 * @example once.trigger(); once.reset();
	 * @param {function} callback The callback
	 * @config {boolean} bool Boolean to control actions
	 * @return {object} Returns a object to trigger callback
	 */
	once: function once(callback){
		var bool = false;
		return{
			trigger:function(){
				if(bool) return;
				bool = true;
				return callback.apply(window, Array.prototype.slice.call(arguments));
			},
			reset:function(){
				bool = false;
			},
			disable:function(){
				bool = true;
			}	
		}
	},

	/**
	 * Shift (callbackA can only be called once, until callbackB has been called)
	 * @example shift.alpha(); shift.beta();
	 * @param {function} callbackA The callback
	 * @param {function} callbackB The callback
	 * @config {boolean} bool Boolean to control actions
	 * @return {object} Returns a object to trigger callbacks
	 */
	shift: function shift(callbackA, callbackB){
		var bool = false;
		var callbackA = callbackA || function(){};
		var callbackB = callbackB || function(){};
		return {
			alpha:function() {
				if(bool) return;
				bool = true;
				return callbackA.apply(window, Array.prototype.slice.call(arguments));
			},
			beta:function() {
				if(!bool) return;
				bool = false;
				return callbackB.apply(window, Array.prototype.slice.call(arguments));
			}
		}
	},

	/**
	 * Toggle (toggle between callbackA and callbackB)
	 * @example toggle.trigger(); toggle.reset();
	 * @param {function} callbackA The callback
	 * @param {function} callbackB The callback
	 * @config {boolean} bool Boolean to control actions
	 * @return {object} Returns a object to trigger callbacks
	 */
	toggle: function toggle(callbackA, callbackB){
		var bool = true;
		return {
			trigger: function() {
				if(bool){
					bool = !bool;
		 			return callbackA.apply(window, Array.prototype.slice.call(arguments));
		 		}else{
		 			bool = !bool;
		 			return callbackB.apply(window, Array.prototype.slice.call(arguments));
		 		}
	 			
			},
			reset:function(){
				bool = true;	
			}
		}
	}
}

/** @export */
module.exports = callctrl;

},{}],2:[function(require,module,exports){
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
},{"../../callctrl":1}]},{},[2]);
