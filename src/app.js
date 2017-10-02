'use strict';
import './styles/core.scss';
import angular from 'angular';
import AngularUiRouter from '@uirouter/angularjs';
import AngularSantize from 'angular-sanitize';
import { AppComponent } from './app.component';

const appName = 'myApp';
// Create angular app and specify dependencies
angular.module(appName, [
    AngularUiRouter,
    AngularSantize,
])
.config(config)
.component(AppComponent.selector, AppComponent);

function config ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        });
    $urlRouterProvider.otherwise('/');
}