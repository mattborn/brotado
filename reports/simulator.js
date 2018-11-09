
var Simulator = {
	options: {
		min: 0,
		max: 10000000
	},
	random: function(data){
		var min = data.min || this.options.min,
			max = data.max || this.options.max,
			range = max - min;
		return this.format(Math.round(Math.random() * range) + min);
	},
	format: function(n){
		if (n > 999){
			console.log('n',n);
			console.log('n.length',n.toString().length);
		}
		return n;
	}
}
