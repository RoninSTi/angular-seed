'use strict';

let module = angular.module('app.components', ['ui.router']);
import tpl from './login.html';

module
.config(($stateProvider) => {
  "$ngInject";
    $stateProvider.state({
        name: 'login',
        url: '/login?id',
        component: 'login',
        resolve: {
          userResolve: function($stateParams) {
            // You can use this to fetch data before routing to the component
            // e.g. return UserService.get({ id: $stateParams.id });
            return `Craig ${$stateParams.id}`;
          }
        }
    });
})
// Component docs https://docs.angularjs.org/guide/component
.component('login', {
  bindings: {
    user: '<userResolve' // '<' denotes one-way binding
  },
  template: tpl,
  controller: function($rootScope) {
    "$ngInject";

    // Put all the data you want to be displayed when the component spins up here
    // ... any other critical logic goes in this component lifecycle hook
    this.$onInit = () => {
      this.lastname = 'Cronin';
    };

    // Do other controller'y stuff here

    // When your bindings are updated, this will run
    this.$onChange = () => {
      console.log('Changed');
    };

  }
});

export default module;