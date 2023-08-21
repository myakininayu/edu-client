import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER, TuiButtonModule, TuiSvgModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiAvatarModule, TuiTreeModule } from "@taiga-ui/kit";
import { TuiAppBarModule } from "@taiga-ui/addon-mobile";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { FormsModule } from '@angular/forms';
import { CppCourseComponent } from './components/cpp-course/cpp-course.component';
import { PythonCourseComponent } from './components/python-course/python-course.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CppCourseComponent,
    PythonCourseComponent,
    MainPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiAppBarModule,
    TuiButtonModule,
    TuiTreeModule,
    TuiSvgModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
