import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CppCourseComponent} from "./components/cpp-course/cpp-course.component";
import {PythonCourseComponent} from "./components/python-course/python-course.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: 'cpp', component: CppCourseComponent, pathMatch: 'full' },
  { path: 'python', component: PythonCourseComponent, pathMatch: 'full'  },
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
