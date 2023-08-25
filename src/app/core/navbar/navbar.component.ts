import {Component, Input} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";

interface TreeNode {
  readonly text: string;
  readonly icon?: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {

  @Input() dataTree!: TreeNode;
  @Input() handler!: TuiHandler<TreeNode, readonly TreeNode[]>;

}
