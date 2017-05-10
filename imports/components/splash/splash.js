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
    $scope.navHeader = function() {
      $('#about-collapse').collapse("hide");
      $('#about-collapse1').collapse("show");
      $('#about-collapse2').collapse("hide");
      $('#signup-collapse').collapse("hide");
      $('#header-collapse').collapse("show");
    }
    $scope.navSignup = function() {
      $('#header-collapse').collapse("hide");
      $('#about-collapse').collapse("hide");
      $('#about-collapse1').collapse("show");
      $('#about-collapse2').collapse("hide");
      $('#signup-collapse').collapse("show");
    }
    $scope.navAbout = function() {
      $scope.aboutClass = 'glyphicon glyphicon-chevron-down';
      $scope.aboutSwitch = false;
      $('#signup-collapse').collapse("hide");
      $('#header-collapse').collapse("hide");
      $('#about-collapse2').collapse("hide");
      $('#about-collapse').collapse("show");
      $('#about-collapse1').collapse("show");
    }
    $scope.submit = function () {
        var data = {
          profile: {name: $scope.name, phone: $scope.phone},
          email: $scope.email,
          password: $scope.password
        }

        return Meteor.call('createOctoUser', data, 'standard', function(err, userId) {
          if (!err) {
            $('#successModal').modal('show');
            $('#name').val("");
            $('#phone').val("");
            $('#password').val("");
            $('#email').val("");
            setTimeout(function(){
              $('#signup-collapse').collapse("hide");
              $('#about-collapse').collapse("show")
              $('#about-collapse1').collapse("show");
            }, 500);
          } else {
            $('#errorModal').modal('show');
          }
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
