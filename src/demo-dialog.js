import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class DemoDialog {
  constructor(controller) {
    this.controller = controller;
  }
}
