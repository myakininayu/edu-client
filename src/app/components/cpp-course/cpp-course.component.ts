import { Component } from '@angular/core';

@Component({
  selector: 'app-cpp-course',
  templateUrl: './cpp-course.component.html',
  styleUrls: ['./cpp-course.component.less']
})
export class CppCourseComponent {

  code =
    `t = 5
      print(t)
      def func():
      a = 1
      b = 2
      c = a + b
      return c`;

  onClickMain() {}

  onClickExtra() {}

}
