import { Component } from '@angular/core';
import {CreateContentComponent} from "../create-content/create-content.component";

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.less']
})
export class EditPanelComponent {

  createContentDialog: CreateContentComponent;

  constructor(createContentDialog: CreateContentComponent) {
    this.createContentDialog = createContentDialog;

  }

  createContent() {
    this.createContentDialog.showDialog();
  }

}
