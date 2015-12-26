/** @ngInject */
function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    })
        .state('account', {
        url: '/account',
        template: '<my-account></my-account>'
    });
    $urlRouterProvider.otherwise('/');
}
exports.routerConfig = routerConfig;
