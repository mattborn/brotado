define(['jquery', 'lodash', 'backbone'],
function($, _, Backbone) {
	var Router = function(arguments) {
		this.initialize.apply(this, arguments);
	};

	_.extend(Router.prototype, Backbone.Events, {
		initialize: function(options) {
			console.log('Router initialized');
		}
	});

	return Router;
});
