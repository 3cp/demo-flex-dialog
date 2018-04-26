import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {DemoDialog} from './demo-dialog';

@inject(DialogService)
export class App {
  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  openDialog() {
    this.dialogService.open({viewModel: DemoDialog});
  }
}
