app.controller('taskPageController', function($rootScope, $scope, $http, $timeout, $stateParams, Toast) {

    $scope.params = unescape($stateParams.params);
	$scope.params = eval('(' + $scope.params + ')');
    console.log("here",$scope.params);

    // Toast.showLoading();
});