import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.less']
})
export class PieComponent {
  readonly value = [13769, 12367, 10172, 3018, 2592];
  readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];

}
