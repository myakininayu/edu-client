import {Component, OnInit} from '@angular/core';
import {LessonsService} from "./services/lessons.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'edu-client';
  // data: Observable<any>;
  // lessonServ: LessonsService;

  // constructor(lessonServ: LessonsService) {
  //   this.lessonServ = lessonServ;
  //
  // }
  //
  // ngOnInit() {
  //   this.data = this.lessonServ.getAll();
  //   this.data.subscribe(value => console.log(value))
  // }

}
