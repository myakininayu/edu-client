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
            text: 'Тема 11',
            icon: 'tuiIconStar',
          },
          {
            text: 'Тема 21',
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
  onClickMain() {console.log('click main')}

  onClickExtra() {}
}
