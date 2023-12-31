import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER, TuiButtonModule, TuiSvgModule, TuiHintModule, TuiLinkModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TuiAvatarModule,
  TuiBreadcrumbsModule,
  TuiDialogFormService,
  TuiInputModule, TuiTextareaModule,
  TuiTreeModule
} from "@taiga-ui/kit";
import { TuiAppBarModule } from "@taiga-ui/addon-mobile";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CodeEditorComponent } from './core/code-editor/code-editor.component';
import { CppCourseComponent } from './components/cpp-course/cpp-course.component';
import { PythonCourseComponent } from './components/python-course/python-course.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppBarComponent } from './core/app-bar/app-bar.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MainButtonComponent } from './core/main-button/main-button.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { PieComponent } from './core/charts/pie/pie.component'
import {TuiPieChartModule } from "@taiga-ui/addon-charts";
import { TuiMoneyModule } from "@taiga-ui/addon-commerce";
import { HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './core/footer/footer.component';
import { LinkComponent } from './core/link/link.component';
import { EditPanelComponent } from "./core/edit-panel/edit-panel.component";
import { ContentItemComponent } from './core/content-item/content-item.component';
import { CreateContentComponent } from './core/create-content/create-content.component';

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
    MainButtonComponent,
    BreadcrumbsComponent,
    PieComponent,
    FooterComponent,
    LinkComponent,
    EditPanelComponent,
    ContentItemComponent,
    CreateContentComponent
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
    CodemirrorModule,
    TuiBreadcrumbsModule,
    TuiPieChartModule,
    TuiMoneyModule,
    TuiHintModule,
    HttpClientModule,
    TuiLinkModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextareaModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, CreateContentComponent, TuiDialogFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
