import angular from 'angular';
import angularMeteor from 'angular-meteor';
import splash from '../imports/components/splash/splash';

angular.module('octo-app', [
  angularMeteor,
  splash.name
]);
