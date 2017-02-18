'use strict';

describe('Demo App Controller', function() {
    var $scope;

    beforeEach(module('demoApp'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('AppController', { '$scope': $scope });
    }));

    it("should add two numbers", function() {
        expect($scope.add(10,5)).toBe(15);
    });
});
