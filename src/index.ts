import {IAngularStatic, IScope} from "angular";

declare const angular: IAngularStatic;
export const appModule = angular.module("demo", []);

export class DemoController {

    constructor(readonly $scope: IScope) {
        console.log("$scope", $scope);
    }

    value = "Test";

}

appModule.component("demo", {
    controller: DemoController,
    templateUrl: "/demo.html"
});
