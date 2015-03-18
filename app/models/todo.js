import DS from "ember-data";

var Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: 'Learn Ember.js Faggot!',
			isCompleted: false
		},{
			id: 2,
			title: 'Eat sometimes',
			isCompleted: false
		},{
			id: 3,
			title: 'Rule the world..',
			isCompleted: true
		}
	]
});

export default Todo;
