/**
 * Created by hisp on 1/12/15.
 */

var testApp = angular.module('testApp', [
  'ui.bootstrap',
  'ngRoute',
  'ngCookies',
  'ngSanitize',
  'ngMessages',
  'd2HeaderBar',
  'd2Directives',
  'd2Filters',
  'd2Services',
  'angularLocalStorage',
  'pascalprecht.translate',
])

    .config(function( $routeProvider, $translateProvider ) {
      $routeProvider.when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeController'
      }).otherwise({
        redirectTo: '/'
      });

      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('escaped');
      $translateProvider.useLoader('i18nLoader');

    })

