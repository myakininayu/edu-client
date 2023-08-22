import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.less']
})
export class MainButtonComponent {

  @Input() text!: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.buttonClick.emit();
  }

}
