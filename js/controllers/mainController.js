
angular.module("Main").controller("mainController", function ($scope, config, genericAPIService) {
    var url = 'http://(**URL**)/login/token.php';
    
    var json = {
        username: $scope.username,
        password: $scope.password,
        token: $scope.token
    }

    //retorna o post
    genericAPIService.post(url, json, function (ret) {
        alert(ret);
    })
   
});

// 2
angular.module("Main").controller("mainController", function ($scope, config, genericAPIService) {
    var url = 'http://(**URL**)/login/token.php';
    
    //pega o get
    genericAPIService.get(url, json, function (ret) {
        alert(ret);
    })
   
});
