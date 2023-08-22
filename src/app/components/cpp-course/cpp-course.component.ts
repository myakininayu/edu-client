import { Component } from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";
import {TreeNode} from "../../interfaces/treeNode";

@Component({
  selector: 'app-cpp-course',
  templateUrl: './cpp-course.component.html',
  styleUrls: ['./cpp-course.component.less']
})
export class CppCourseComponent {

  readonly language: string = 'text/x-c++src';

  code =
    `#include"iostream"
int main()
{
  int a = 5;
  int b = 8;
  int res = a + b;
  return 0;
}`;


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

  onClickMain() {}

  onClickExtra() {}

}
