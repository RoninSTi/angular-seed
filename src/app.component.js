import template from './app.html';

export let AppComponent = {
  templateUrl: template,
  selector: 'app',
  bindings: {},
  controller: class AppCtrl {
    constructor($state) {
      "$ngInject";
      Object.assign(this, { $state });
    }

    $onInit() {

    }
  }
};