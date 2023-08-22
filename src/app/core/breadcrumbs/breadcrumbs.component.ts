// @ts-ignore
import {Component, Input, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() route!: string;

  items: any;

  ngOnInit(): void {
    this.items = [
      {
        caption: 'home',
        routerLink: '/',
        routerLinkActiveOptions: {exact: true}
      },
      {
        caption: this.route.substring(1),
        routerLink: this.route,
        routerLinkActiveOptions: {exact: true}
      }
    ];
  }
}
