/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    // .state('account', {
    //   url: '/account',
    //   templateUrl: 'app/components/account/account.html',
    //   controller: 'AccountController',
    //   controllerAs: 'account'
    // })
    .state('account', {
      url: '/account',
      template: '<my-account></my-account>'
    });

    $urlRouterProvider.otherwise('/');
}
