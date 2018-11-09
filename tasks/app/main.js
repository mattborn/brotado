requirejs.config({
	paths: {
		'backbone': 'vendor/backbone',
		'd3': 'vendor/d3',
		'jquery': 'vendor/jquery',
		'lodash': 'vendor/lodash',
		'moment': 'vendor/moment',
		'mustache': 'vendor/mustache',
		'prefixfree': 'vendor/prefixfree',
		'tasks': 'projects/tasks/tasks'
	},
	shim: {
		'backbone': {
			deps: ['lodash', 'jquery'],
			exports: 'Backbone'
		},
		'lodash': {
			exports: '_'
		}
	}
});

//backbonetutorials.com/organizing-backbone-using-modules
require(['sprout', 'prefixfree'],
function(Sprout){
	Sprout.initialize();
});
