import {Component} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";

interface TreeNode {
  readonly text: string;
  readonly icon?: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'edu-client';

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

  isBurgerOpen = true;
  onBuggerClick() {
    this.isBurgerOpen=!this.isBurgerOpen;
  }

  onClickMain() {

  }

  onClickExtra() {

  }
}
