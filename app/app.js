angular
    .module('portfolio', ['ui.router'])
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');

    $stateProvider
        .state('about', {
            url: '/about',
            controller: 'AboutController',
            templateUrl: 'app/views/about.html'
        })
        .state('projects', {
            url: '/projects',
            controller: 'ProjectsController',
            templateUrl: 'app/views/projects.html'
        })
        .state('IoT', {
            url: '/iot',
            controller: 'IoTController',
            templateUrl: 'app/views/iot.html'
        });
}
