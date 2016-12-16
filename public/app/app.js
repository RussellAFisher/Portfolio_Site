var app = angular.module('portfolio', ['ui.router']);
app.config(config);

app.factory('Photography', function() {
    return [{
        id: 0,
        name: 'test',
        image: 'app/images/CarPower.png',
    }, {
        id: 1,
        image: 'app/images/FireAlarmPi.png',
    }, {
        id: 2,
        image: 'app/images/GPSHoming.png',
    }, {
        id: 3,
        image: 'app/images/PowerRelay.png'
    }, {
        id: 4,
        image: 'app/images/CarPower.png',
    }, {
        id: 5,
        image: 'app/images/FireAlarmPi.png',
    }, {
        id: 6,
        image: 'app/images/GPSHoming.png',
    }, {
        id: 7,
        image: 'app/images/PowerRelay.png'
    }];
});

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
        .state('tinkering', {
            url: '/tinkering',
            controller: 'TinkeringController',
            templateUrl: 'app/views/tinkering.html'
        })
        .state('photography', {
            url: '/photography',
            controller: 'PhotographyController',
            templateUrl: 'app/views/photography.html'
        })
        .state('photographyDetails', {
            url: '/photographyDetails/:photoID',
            controller: 'PhotographyDetailsController',
            templateUrl: 'app/views/photographyDetails.html'
        });
}
