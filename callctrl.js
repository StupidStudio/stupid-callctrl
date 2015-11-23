/**
 * Call controller
 * @example example
 * @param {type} varname description
 * @config {type} varname description
 * @return {type} description
 */
function Callctrl(opts){
	var self = {};
	var opts = opts || {};

	function once(callback){
		var called = false;
		return{
			trigger:function(){
				if(called) return;
				callback();
				called = true;
			},
			reset:function(){
				called = false;
			}	
		}
	}

	function switch(a, b){
		var c = false;
		var a = a || function(){};
		var b = b || function(){};

		return {
			alpha:function() {
				if(c) return;
				a();
				c = true;
			},
			beta:function() {
				if(!c) return;
				b();
				c = false;
			}
		}
	}

	function toggle(active,deactive){
		var toggle = true;
		return {
			trigger: function() {
				if(toggle){
		 			active();
		 		}else{
		 			deactive();
		 		}
	 			toggle = !toggle;
			},
			reset:function(){
				toggle = true;	
			}
		}
	}

	self.once = once;
	self.switch = switch;
	self.toggle = toggle;

	return self;
}

 
module.exports = Callctrl;
