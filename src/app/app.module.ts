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
import { CodeEditorComponent } from './core/code-editor/code-editor.component';
import { CppCourseComponent } from './components/cpp-course/cpp-course.component';
import { PythonCourseComponent } from './components/python-course/python-course.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppBarComponent } from './core/app-bar/app-bar.component';
import { BurgerLogicService } from './services/burgerLogic.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MainButtonComponent } from './core/main-button/main-button.component'

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    AppComponent,
    CppCourseComponent,
    PythonCourseComponent,
    MainPageComponent,
    NotFoundComponent,
    AppBarComponent,
    NavbarComponent,
    MainButtonComponent
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
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, BurgerLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
