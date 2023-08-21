import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerLogicService {

  constructor() { }

  public isBurgerOpen = true;

  onBuggerClick(): void {
    this.isBurgerOpen=!this.isBurgerOpen;
  }

}
