angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.resumen', {
    url: '/resumen',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resumen.html',
        controller: 'resumenCtrl'
      }
    }
  })

  .state('menu.categorAs', {
    url: '/categorias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categorAs.html',
        controller: 'categorAsCtrl'
      }
    }
  })

  .state('menu.gastos', {
    url: '/gastos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gastos.html',
        controller: 'gastosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.categorA', {
    url: '/categoria',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categorA.html',
        controller: 'categorACtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/resumen')

  

});