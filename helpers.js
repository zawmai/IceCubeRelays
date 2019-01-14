var ifCond_helper = function (v1, operator, v2, options) {
	function checkCondition(v1, operator, v2){
		switch(operator) {
			case '==':
				return (v1 == v2);
			case '===':
				return (v1 === v2);
			case '!==':
				return (v1 !== v2);
			case '<':
				return (v1 < v2);
			case '<=':
				return (v1 <= v2);
			case '>':
				return (v1 > v2);
			case '>=':
				return (v1 >= v2);
			case '&&':
				return (v1 && v2);
			case '||':
				return (v1 || v2);
			default:
				return false;
		}
	}

	return checkCondition(v1, operator, v2) 
				? options.fn(this)
				: options.inverse(this);
};


module.exports = {
	ifCond_fn: ifCond_helper
};



