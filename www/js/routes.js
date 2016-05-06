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

  .state('menu.categorias', {
    url: '/categorias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categorias.html',
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

  .state('menu.categoria', {
    url: '/categoria',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categoria.html',
        controller: 'categorACtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/resumen')

  

});