import { Component } from '@angular/core';

@Component({
  selector: 'app-python-course',
  templateUrl: './python-course.component.html',
  styleUrls: ['./python-course.component.less']
})
export class PythonCourseComponent {

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
