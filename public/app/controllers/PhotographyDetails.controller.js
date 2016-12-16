angular
    .module('portfolio')
    .controller('PhotographyDetailsController', PhotographyDetailsController);

function PhotographyDetailsController($scope, $state, $stateParams, Photography) {
    var photoID = $stateParams.photoID;
    $scope.photograph = Photography[photoID];

    if (parseInt(photoID) === 0) {
        $scope.backID = ((Photography.length) - 1);
    } else {
        $scope.backID = parseInt(photoID) - 1;
    }

    if (parseInt(photoID) === (Photography.length) - 1) {
        $scope.forwardID = 0;
    } else {
        $scope.forwardID = parseInt(photoID) + 1;
    }

}
