import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less']
})
export class LinkComponent {
  @Input() text = '';
  @Input() href = '';
  @Input() color = '';
  target = '_blank';
}
