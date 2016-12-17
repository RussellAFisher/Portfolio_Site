var app = angular.module('portfolio', ['ui.router']);
app.config(config);

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');

    $stateProvider
        .state('about', {
            url: '/about',
            // controller: 'AboutController',
            templateUrl: 'app/views/about.html'
        })
        .state('projects', {
            url: '/projects',
            // controller: 'ProjectsController',
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
            // controller: 'PhotographyDetailsController',
            templateUrl: 'app/views/photographyDetails.html'
        });
}

app.factory('Photography', function() {
    return [{
        id: 0,
        name: 'test',
        image: 'app/images/photography/35mmBW01.jpg',
    }, {
        id: 1,
        name: 'test',
        image: 'app/images/photography/35mmBW02.jpg',
    }, {
        id: 2,
        name: 'test',
        image: 'app/images/photography/35mmBW03.jpg',
    }, {
        id: 3,
        name: 'test',
        image: 'app/images/photography/animal01.jpg',
    }, {
        id: 4,
        name: 'test',
        image: 'app/images/photography/animal02.jpg',
    }, {
        id: 5,
        name: 'test',
        image: 'app/images/photography/animal03.jpg',
    }, {
        id: 6,
        name: 'test',
        image: 'app/images/photography/closeUp01.jpg',
    }, {
        id: 7,
        name: 'test',
        image: 'app/images/photography/closeUp02.jpg',
    }, {
        id: 8,
        name: 'test',
        image: 'app/images/photography/closeUp03.jpg',
    }, {
        id: 9,
        name: 'test',
        image: 'app/images/photography/closeUp04.jpg',
    }, {
        id: 10,
        name: 'test',
        image: 'app/images/photography/closeUp05.jpg',
    }, {
        id: 11,
        name: 'test',
        image: 'app/images/photography/closeUp06.jpg',
    }, {
        id: 12,
        name: 'test',
        image: 'app/images/photography/industrial01.jpg',
    }, {
        id: 13,
        name: 'test',
        image: 'app/images/photography/industrial02.jpg',
    }, {
        id: 14,
        name: 'test',
        image: 'app/images/photography/industrial03.jpg',
    }, {
        id: 15,
        name: 'test',
        image: 'app/images/photography/industrial04.jpg',
    }, {
        id: 16,
        name: 'test',
        image: 'app/images/photography/landscape01.jpg',
    }, {
        id: 17,
        name: 'test',
        image: 'app/images/photography/landscape02.jpg',
    }, {
        id: 18,
        name: 'test',
        image: 'app/images/photography/landscape03.jpg',
    }, {
        id: 19,
        name: 'test',
        image: 'app/images/photography/landscape04.jpg',
    }, {
        id: 20,
        name: 'test',
        image: 'app/images/photography/landscape05.jpg',
    }, {
        id: 21,
        name: 'test',
        image: 'app/images/photography/landscape06.jpg',
    }, {
        id: 22,
        name: 'test',
        image: 'app/images/photography/landscape07.jpg',
    }, {
        id: 23,
        name: 'test',
        image: 'app/images/photography/landscape08.jpg',
    }, {
        id: 24,
        name: 'test',
        image: 'app/images/photography/nature01.jpg',
    }, {
        id: 25,
        name: 'test',
        image: 'app/images/photography/nature02.jpg',
    }, {
        id: 26,
        name: 'test',
        image: 'app/images/photography/nature03.jpg',
    }, {
        id: 27,
        name: 'test',
        image: 'app/images/photography/nature04.jpg',
    }, {
        id: 28,
        name: 'test',
        image: 'app/images/photography/nature05.jpg',
    }, {
        id: 29,
        name: 'test',
        image: 'app/images/photography/nature06.jpg',
    }, {
        id: 30,
        name: 'test',
        image: 'app/images/photography/nature07.jpg',
    }, {
        id: 31,
        name: 'test',
        image: 'app/images/photography/nature08.jpg',
    }, {
        id: 32,
        name: 'test',
        image: 'app/images/photography/nature09.jpg',
    }, {
        id: 33,
        name: 'test',
        image: 'app/images/photography/night01.jpg',
    }, {
        id: 34,
        name: 'test',
        image: 'app/images/photography/night02.jpg',
    }, {
        id: 35,
        name: 'test',
        image: 'app/images/photography/night03.jpg',
    }, {
        id: 36,
        name: 'test',
        image: 'app/images/photography/night04.jpg',
    }, {
        id: 37,
        name: 'test',
        image: 'app/images/photography/night05.jpg',
    }, {
        id: 38,
        name: 'test',
        image: 'app/images/photography/sunset01.jpg',
    }, {
        id: 39,
        name: 'test',
        image: 'app/images/photography/sunset02.jpg',
    }];
});
