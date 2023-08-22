import { Component } from '@angular/core';

@Component({
  selector: 'app-cpp-course',
  templateUrl: './cpp-course.component.html',
  styleUrls: ['./cpp-course.component.less']
})
export class CppCourseComponent {

  readonly lang: string = 'c++';

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
