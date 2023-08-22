import { Component } from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";
import {TreeNode} from "../../interfaces/treeNode";

@Component({
  selector: 'app-python-course',
  templateUrl: './python-course.component.html',
  styleUrls: ['./python-course.component.less']
})
export class PythonCourseComponent {

  language: string = 'python';

  code =
    `t = 5
print(t)
def func():
  a = 1
  b = 2
  c = a + b
  return c`;



  readonly data: TreeNode = {
    text: 'Курс',
    children: [
      {
        text: 'Сентябрь',
        children: [
          {
            text: 'История языка Python',
            icon: 'tuiIconStar',
          },
          {
            text: 'Типы данных в языке Python',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Октябрь',
        children: [
          {
            text: 'Переменные',
            icon: 'tuiIconStar',
          },
          {
            text: 'Действия с переменными',
            icon: 'tuiIconStar'

          },
          {
            text: 'Условные конструкции',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Ноябрь',
        children: [
          {
            text: 'Циклы',
            icon: 'tuiIconStar',
          },
          {
            text: 'Функции',
            icon: 'tuiIconStar'

          }
        ],
      },

    ],
  };


  readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
    item.children || EMPTY_ARRAY;
  onClickMain() {console.log('click main')}

  onClickExtra() {}
}
