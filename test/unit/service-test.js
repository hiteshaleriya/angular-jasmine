'use strict';

describe('Demo App Service', function() {
    var service, httpBackend;

    beforeEach(module('demoApp'));

    beforeEach(inject(function(AppService) { //$injector.get('AppService')
        service = AppService;
    }));

    it("should return 5 countries", function() {
        expect(service.length).toBe(5);
    });
});
