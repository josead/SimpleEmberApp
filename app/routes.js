define([], function() {

	function initRoutes() {
		Todos.Router.map(function() {
		  this.resource('todos', { path: '/' });
		});
	};

	return {
		init: initRoutes
	};
});