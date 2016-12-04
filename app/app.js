angular
    .module('portfolio', ['ui.router'])
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'app/views/home.html'
        })
        .state('resume', {
            url: '/resume',
            controller: 'ResumeController',
            templateUrl: 'app/views/resume.html'
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
