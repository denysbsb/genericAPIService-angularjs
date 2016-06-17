
angular.module("Main").controller("mainController", function ($scope, config, genericAPIService) {
    var url = 'http://(**URL**)/login/token.php';
    
    var json = {
        username: $scope.username,
        password: $scope.password,
        token: $scope.token
    }
    genericAPIService.post(url, json, function (ret) {
        alert(ret);
    })
   
});