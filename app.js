requirejs.config({
    baseUrl: 'app',
    paths: {
        jquery: '../vendor/jquery-1.11.2.min',
        handlebars: '../vendor/handlebars-v1.3.0',
        ember: '../vendor/ember',
        emberData: '../vendor/ember-data'
    }
});

require(['main'],function(main) {
	
});