var CALC = {
  add: function(a, b){
  	return a + b;
  }, 

  sub: function(a, b){
  	return a - b;
  },

  mul: function(a, b){
  	return a * b;
  },

  div: function(a, b){
  	return a / b;
  },
  percent: function(a, b){
  	return a % b;
  }
};

module.exports.Calc = CALC;