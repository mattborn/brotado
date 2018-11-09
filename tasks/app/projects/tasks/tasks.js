define(['jquery', 'lodash', 'backbone', 'mustache',
	'text!projects/tasks/tasks.css',
	'text!projects/tasks/tasks.stache',
	'moment'
],
function($, _, Backbone, Mustache, styles, markup) {
	var initialize = function() {
		$('#project-styles').html(styles);

		var TasksModel = Backbone.Model.extend({}),

		TasksCollection = Backbone.Collection.extend({
			model: TasksModel,
			url: 'app/data/simulate.json',
			initialize: function(models, options) {
				console.log('TasksCollection initialized');
			},
			simulateTasks: function() {
				var data = _.shuffle(this.toJSON()[0].people);

				_.each(data, function(m) {
					var roles = ['Administrator', 'User'],
						statuses = ['read', 'unread'],
						types = ['general', 'lead', 'support'],
						activites = ['Assigned by', 'Comment by', 'Reassigned by'],
						day = moment()
							.subtract('days', _.random(14))
							.subtract('hours', _.random(8))
							.subtract('minutes', _.random(59)),
						managers = ['Krzysztofherr K.', 'Mahershalalhashbaz B.', 'Ryan E.', 'Person L.'];

					m.id = _.random(1000000);
					m.role = roles[_.random(1)];
					m.response = _.random(50);
					m.resolution = _.random(100);
					m.assigned = _.random(100,150);
					m.completed = _.random(100);
					m.ratio = Math.round(m.completed / m.assigned * 100);
					m.message = 'I love scotch. Scotchy, scotch, scotch. Here it goes down, down into my belly... ';
					m.who = 'You';
					m.when = day.fromNow();
					m.someone = managers[_.random(3)];;
					m.date = day.format('[on] MMMM D YYYY [at] h:mma');
					m.type = types[_.random(2)];
					m.comments = _.random(20);
					m.closed = 0;
					m.status = statuses[_.random(1)];
					m.priority = _.random(1);
					m.last = activites[_.random(2)];
				});

				return data;
			}
		}),

		tasksCollection = new TasksCollection([], {}),

		TasksView = Backbone.View.extend({
			initialize: function(options) {
				this.collection = tasksCollection;
				this.collection.on('reset', this.render);
				this.collection.fetch();
				console.log('TasksView initialized');
			},
			render: function(collection) {
				// console.log(collection.simulateTasks());
				var html = Mustache.to_html(markup, {
					tasks: collection.simulateTasks()
				});
				$('#content').html(html);
			}
		}),

		tasksView = new TasksView({});

		console.log('Tasks initialized');
	};

	return {
		initialize: initialize
	};
});
