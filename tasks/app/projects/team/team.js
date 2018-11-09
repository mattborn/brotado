define(['jquery', 'lodash', 'backbone', 'mustache', 'text!html/team.stache'],
function($, _, Backbone, Mustache, teamTemplate) {
	var initialize = function() {
		loadProjectStyles('app/css/team.css');

		var TeamModel = Backbone.Model.extend({}),

		TeamCollection = Backbone.Collection.extend({
			model: TeamModel,
			url: 'simulate.json',
			initialize: function(models, options){
				console.log('TeamCollection initialized');
			},
			simulatePublishing: function() {
				var data = _.shuffle(this.toJSON()[0].people);

				_.each(data, function(m) {
					m.average = _.random(50);
					m.replies = _.random(200);
					m.total = _.random(200,300);

				});

				return data;
			},
			simulateTasks: function() {
				var data = _.shuffle(this.toJSON()[0].people);

				_.each(data, function(m) {
					var role = ['Administrator', 'User'];
					m.role = role[_.random(1)];
					m.response = _.random(50);
					m.resolution = _.random(100);
					m.assigned = _.random(100,150);
					m.completed = _.random(100);
					m.ratio = Math.round(m.completed / m.assigned * 100);
				});

				return data;
			}
		}),

		teamCollection = new TeamCollection([], {}),

		TeamView = Backbone.View.extend({
			initialize: function(options) {
				this.collection = teamCollection;
				this.collection.on('reset', this.render);
				this.collection.fetch();
				console.log('TeamView initialized');
			},
			render: function(collection) {
				var html = Mustache.to_html(teamTemplate, {
					publishing: collection.simulatePublishing(),
					tasks: collection.simulateTasks()
				});
				$('#content').html(html);
			}
		}),

		teamView = new TeamView({});

		console.log('Sprout initialized');
	},

	loadProjectStyles = function(href) {
		$('#project-styles').attr('href', href);
	};

	return {
		initialize: initialize
	};
});
