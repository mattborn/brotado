
var GroupModel = Backbone.Model.extend({});

var GroupCollection = Backbone.Collection.extend({
	accessToken: null,
	model: GroupModel,
	initialize: function (models, options) {
		this.accessToken = options.accessToken;
	},
	parse: function (response) {
		return response.data;
	},
	url: function () {
		return 'https://www.sproutsocial.com/api/groups/?access_token=' +
			this.accessToken;
	},
	toGroupReportSelector: function () {
		var data = this.toJSON().splice(0),
			allNetworks = [];

		_.each(data, function (m) {
			m.numNetworks = _.size(m.networks);
			_.each(m.networks, function (network) {
				if (!_.include(_.pluck(allNetworks, 'id'), network.id)){
					allNetworks.push(network);
				}
			});
		});

		data.unshift({
			name: 'All Accounts',
			numNetworks: _.size(allNetworks),
			networks: allNetworks
		});

		return data;
	}
});

var PresetView = Backbone.View.extend({
	initialize: function (options) {
		this.collection = options.collection;
		this.collection.on('reset', this.render);
	},

	render: function (collection) {
		var template = ich.presetView({presets: collection.toGroupReportSelector()});
		$('.preset-list').html(template);
	}
});

var collection = new GroupCollection([], {
	// accessToken: 'a02aa042-01c2-42f2-a379-fe849113227e'
	accessToken: '4c4c3a96-e497-4f02-aa4e-425a8ee5c393'
});

var presetView = new PresetView({collection: collection});

presetView.collection.fetch({
	error: function() { alert('You must disable web security via Terminal.'); }
});

var ProfileView = Backbone.View.extend({
	initialize: function (options) {
		this.collection = options.collection;
		this.collection.on('reset', this.render);
	},

	render: function (collection) {
		console.log(collection.toGroupReportSelector()[0].networks);
		var template = ich.profileView({profiles: collection.toGroupReportSelector()[0].networks});
		$('.profile-list').html(template);
	}
});

var profileView = new ProfileView({collection: collection});

// var SpRouter = Backbone.Router.extend({
// 	routes: {
// 		'': 'home',
// 		'home': 'home',
// 		'reports': 'reports',
// 		'*actions': 'default'
// 	},
// 	home: function(){
// 		$('#main').html('dashboard.stache');
// 		$('#side').html('dashboard_side.stache');
// 	},
// 	reports: function(){
// 		$('#main').html('reports.stache');
// 	},
// 	default: function(actions){
// 		$('#main').html('Nothing built for '+actions);
// 	}
// });

// $(function(){
// 	var spRouter = new SpRouter;
// 	Backbone.history.start({pushState: true});
// });

$(function(){
	$('#change-preset').click(function(){
		$('#presets').slideToggle(200);
		$('.report-header').toggleClass('presets-active');
		return false;
	});
	$('.show-profiles').click(function(){
		$('#profiles').slideToggle(200);
		return false;
	});
});

$('a').click(function() { return false; });
