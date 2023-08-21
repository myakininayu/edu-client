import { Component } from '@angular/core';
import { BurgerLogicService } from '../../services/burgerLogic.service'

@Component({
  selector: 'app-custom-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.less']
})
export class AppBarComponent {

  constructor(public buttonService: BurgerLogicService) {
  }

}
