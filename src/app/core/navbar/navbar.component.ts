import { Component } from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";
import { BurgerLogicService } from '../../services/burgerLogic.service'

interface TreeNode {
  readonly text: string;
  readonly icon?: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {

  constructor(public buttonService: BurgerLogicService) {
  }


  readonly data: TreeNode = {
    text: 'Курс',
    children: [
      {
        text: 'Сентябрь',
        children: [
          {
            text: 'Тема 1',
            icon: 'tuiIconStar',
          },
          {
            text: 'Тема 2',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Октябрь',
        children: [
          {
            text: 'Тема 3',
            icon: 'tuiIconStar',
          },
          {
            text: 'Тема 4',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Ноябрь',
        children: [
          {
            text: 'Тема 5',
            icon: 'tuiIconStar',
          },
          {
            text: 'Тема 6',
            icon: 'tuiIconStar'

          }
        ],
      },

    ],
  };


  readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
    item.children || EMPTY_ARRAY;

}
