import { Injectable } from '@angular/core';

@Injectable()
export class WizardActivateService {

  constructor() { }
  private menuType = {};

  setOption(option, value) {
    this.menuType[option] = value;
  }

  getOption() {
    return this.menuType;
  }
}
