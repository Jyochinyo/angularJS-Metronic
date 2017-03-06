// 加载提示框
app.directive('loadingToast', function () {
  return {  
        restrict: "EA", 
        templateUrl: 'services/toast/loadingToast.html',
        replace: true
    };  
});

// 加载完成提示框
app.directive('finishToast', function () {
  return {  
        restrict: "EA", 
        templateUrl: 'services/toast/finishToast.html',
        replace: true
    };  
});

// 加载错误提示框
app.directive('infoToast', function () {
  return {  
        restrict: "EA", 
        templateUrl: 'services/toast/infoToast.html',
        replace: true
    };  
});

app.factory('Toast', function($rootScope) { // injectables go here
  var service = {    // our factory definition
    showFinish: function() { 
        $rootScope.toastFinishTitle = "已完成";
        $rootScope.isShowFinish = true;
    },
    hideFinish: function() {
        $rootScope.isShowFinish = true;
    },
    showLoading: function() {
        $rootScope.toastLoadingTitle = "数据加载中";
        $rootScope.isShowLoading = true;
    },
    hideLoading: function() {
        $rootScope.isShowLoading = false;
    },
    showInfo: function() {
        $rootScope.toastInfoTitle = "数据有问题";
        $rootScope.isShowInfo = true;
    },
    hideInfo: function() {
        $rootScope.isShowInfo = false;
    }
  };  return service;
});