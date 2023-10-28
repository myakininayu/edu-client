import {Component, OnInit} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";
import {TreeNode} from "../../interfaces/treeNode";
import {Observable} from "rxjs";
import {LessonsService} from "../../services/lessons.service";

@Component({
  selector: 'app-python-course',
  templateUrl: './python-course.component.html',
  styleUrls: ['./python-course.component.less']
})
export class PythonCourseComponent implements OnInit{

  language: string = 'python';
  dataCourse$: Observable<any>;
  lessonServ: LessonsService;
  courses: object[];


  constructor(lessonServ: LessonsService) {
    this.lessonServ = lessonServ;

  }

  ngOnInit() {
    this.dataCourse$ = this.lessonServ.getAll();
    this.dataCourse$.subscribe(value => {
      console.log(value);
      this.courses = value;
      console.log(this.courses);
    })
  }


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
