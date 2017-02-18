'use strict';

describe('Demo App Directive', function() {
    var $scope, element;

    beforeEach(module('demoApp'));

    beforeEach(inject(function($rootScope, $compile) {
        $scope = $rootScope.$new();
        element = angular.element('<span date-now=\"MM/dd/yyyy\"></span>');
        $compile(element)($scope);
        $scope.$apply();
    }));

    it("should show current date", function() {
        var today = new Date();
        var currentDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

        expect(element.html()).toContain(currentDate);
    });
});
