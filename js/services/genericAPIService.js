angular.module("Main")
.service("genericAPIService", function ($http, config) {

    this.get = function (path, callback) {
        return $http.get(config.baseUrl + '/' + path)
        .success(function (ret) {
            config.debug('erro ' + ret);
            callback( ret );
        })
        .error(function (ret) {
            alert('Erro na chamada API - olhe o console ');
            config.debug('Erro ao conectar a API, em genericAPIService.js ' + ret);
        });

    };


    this.post = function (path, json, callback) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        return $http.post(config.baseUrl + '/' + path, json)
        .success(function (ret) {
            config.debug('sucesso  ' + ret);
            callback(ret);
        })
        .error(function (ret) {
            alert('Erro na chamada API - olhe o console ');
            config.debug('Erro ao conectar a API, em genericAPIService.js ' + ret);
        });

    };


});