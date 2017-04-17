import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './splash.html';



class SplashCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    $scope.aboutSwitch = false;
    $scope.aboutClass = 'glyphicon glyphicon-chevron-down';
    $scope.clickAboutCollaps = function() {
      $scope.$evalAsync(function () {
        $scope.aboutSwitch = ($scope.aboutSwitch == false ? true : false);
        $scope.aboutClass = ($scope.aboutSwitch == false ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up');
      });
    }
  }
}

export default angular.module('splash', [
  angularMeteor
])
  .component('splash', {
    templateUrl: 'imports/components/splash/splash.html',
    controller: ['$scope', SplashCtrl]
  });
