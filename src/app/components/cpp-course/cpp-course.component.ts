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
            text: 'История языка С++',
            icon: 'tuiIconStar',
          },
          {
            text: 'Типы данных',
            icon: 'tuiIconStar'

          },
          {
            text: 'Переменные',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Октябрь',
        children: [
          {
            text: 'Условные конструкции',
            icon: 'tuiIconStar',
          },
          {
            text: 'Циклы',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Ноябрь',
        children: [
          {
            text: 'Функции',
            icon: 'tuiIconStar',
          },
          {
            text: 'Классы',
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
