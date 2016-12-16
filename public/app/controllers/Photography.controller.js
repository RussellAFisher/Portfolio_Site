angular
    .module('portfolio')
    .controller('PhotographyController', PhotographyController);

function PhotographyController($scope, $state, Photography) {
    $scope.photography = Photography;
}
