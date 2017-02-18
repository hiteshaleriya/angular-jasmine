angular.module('demoApp', [])

.controller('AppController', function($scope) {
    $scope.add = function(a, b) {
        return parseInt(a) + parseInt(b);
    };
})

.service('AppService', function() {
    return [{
        "id": "1",
        "name": "Australia"
    }, {
        "id": "2",
        "name": "Austria"
    }, {
        "id": "3",
        "name": "Bahrain"
    }, {
        "id": "4",
        "name": "Bangladesh"
    }, {
        "id": "5",
        "name": "Belgium"
    }];
})

.directive('dateNow', function($filter) {
    return {
        link: function($scope, $element, $attrs) {
            $element.text($filter('date')(new Date(), $attrs.dateNow));
        }
    };
});
