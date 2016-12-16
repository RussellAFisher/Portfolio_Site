angular
    .module('portfolio')
    .controller('PhotographyController', PhotographyController);

function PhotographyController($scope, $state) {
    $scope.photography = [{
        image: 'app/images/CarPower.png',
    }, {
        image: 'app/images/FireAlarmPi.png',
    }, {
        image: 'app/images/GPSHoming.png',
    }, {
        image: 'app/images/PowerRelay.png'
    }, {
        image: 'app/images/CarPower.png',
    }, {
        image: 'app/images/FireAlarmPi.png',
    }, {
        image: 'app/images/GPSHoming.png',
    }, {
        image: 'app/images/PowerRelay.png'
    }];
}
