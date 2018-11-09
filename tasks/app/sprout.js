define(['jquery', 'lodash', 'backbone', 'router', 'tasks'],
function($, _, Backbone, Router, Tasks) {
	var initialize = function() {
		window.Sprout = {};
		window.Sprout.er = new Router;
		Tasks.initialize();
		console.log('Sprout initialized');
	};

	return {
		initialize: initialize
	};
});
