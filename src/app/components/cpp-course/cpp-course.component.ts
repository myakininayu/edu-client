import { Component } from '@angular/core';

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

  onClickMain() {}

  onClickExtra() {}

}
