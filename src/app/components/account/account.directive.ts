/** @ngInject */
export function myAccount(): angular.IDirective {

  return {
    restrict: 'E',
    templateUrl: 'app/components/account/account.html',
    controller: MyAccountController,
    controllerAs: 'account',
    scope: {
      test: '@'
    },
    bindToController: true
  };

}

/** @ngInject */
export class MyAccountController {
  public test:string;
  constructor() {
    this.test = "Vince";
  }
}
