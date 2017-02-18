'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /patientsView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/patientsView");
  });


  describe('patientsView', function() {

    beforeEach(function() {
      browser.get('index.html#!/patientsView');
    });


    it('should render patientsView when user navigates to /patientsView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('addPatientView', function() {

    beforeEach(function() {
      browser.get('index.html#!/addPatientView');
    });


    it('should render addPatientView when user navigates to /addPatientView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
