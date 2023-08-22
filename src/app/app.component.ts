import {Component, Input} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";
import {TreeNode} from "./interfaces/treeNode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'edu-client';



  readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
    item.children || EMPTY_ARRAY;



  onClickMain() {

  }

  onClickExtra() {

  }


  code =
    `t = 5
      print(t)
      def func():
      a = 1
      b = 2
      c = a + b
      return c`;

  ngOnInit() {



  }


}
