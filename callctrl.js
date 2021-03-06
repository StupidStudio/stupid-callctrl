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
