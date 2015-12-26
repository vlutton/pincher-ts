/** @ngInject */
function myAccount() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/account/account.html',
        controller: MyAccountController,
        controllerAs: 'account',
        bindToController: true
    };
}
exports.myAccount = myAccount;
/** @ngInject */
var MyAccountController = (function () {
    function MyAccountController() {
    }
    return MyAccountController;
})();
exports.MyAccountController = MyAccountController;
