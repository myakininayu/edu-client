import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogFormService} from "@taiga-ui/kit";
import {TuiDialogService} from "@taiga-ui/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LessonsService} from "../../services/lessons.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.less'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContentComponent {


  open = false;

  showDialog(): void {
    this.open = true;
  }
  response$: Observable<any>;

  lessonServ: LessonsService;


  form: FormGroup;

  constructor(private formBuilder: FormBuilder, lessonServ: LessonsService) {
    this.lessonServ = lessonServ;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Обработка отправки данных формы
      console.log(this.form.value);
      this.response$ = this.lessonServ.createContent({course: "python", type: this.form.controls['type'].value, text: this.form.controls['text'].value, image: ""});
      this.response$.subscribe(value => {
        console.log('Ответ от сервера - ', value);
      })
    } else {
      // Обработка ошибок валидации
    }
  }

  onCancel() {
    // Действие при отмене
    this.form.reset();
  }
}
