app.factory('customService',['$http', function ($http) {
        return {
            onePlus: function (info) {
                return info+"哈哈";
            }
        }
}]);


app.constant('apiKey','123123123');