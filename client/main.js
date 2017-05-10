import angular from 'angular';
import angularMeteor from 'angular-meteor';
import splash from '../imports/components/splash/splash';
import '../imports/startup/accounts-config.js';

angular.module('octo-app', [
  angularMeteor,
  splash.name,
  'accounts.ui'
]);
