import {Component, Input} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from "@taiga-ui/cdk";

interface TreeNode {
  readonly text: string;
  readonly icon?: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'edu-client';

  readonly data: TreeNode = {
    text: 'Курс',
    children: [
      {
        text: 'Сентябрь',
        children: [
          {
            text: 'Тема 1',
            icon: 'tuiIconStar',
          },
          {
            text: 'Тема 2',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Октябрь',
        children: [
          {
            text: 'Тема 3',
            icon: 'tuiIconStar',
          },
          {
            text: 'Тема 4',
            icon: 'tuiIconStar'

          }
        ],
      },
      {
        text: 'Ноябрь',
        children: [
          {
            text: 'Тема 5',
            icon: 'tuiIconStar',
          },
          {
            text: 'Тема 6',
            icon: 'tuiIconStar'

          }
        ],
      },

    ],
  };

  readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
    item.children || EMPTY_ARRAY;

  isBurgerOpen = true;
  onBuggerClick() {
    this.isBurgerOpen=!this.isBurgerOpen;
  }

  onClickMain() {

  }

  onClickExtra() {

  }

  codeMirrorOptions: any = {
    mode: "text/x-mysql",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  query!: string;

  ngOnInit() {
    this.query = `-- SQL Mode for CodeMirror
SELECT SQL_NO_CACHE DISTINCT
		@var1 AS \`val1\`, @'val2', @global.'sql_mode',
		1.1 AS \`float_val\`, .14 AS \`another_float\`, 0.09e3 AS \`int_with_esp\`,
		0xFA5 AS \`hex\`, x'fa5' AS \`hex2\`, 0b101 AS \`bin\`, b'101' AS \`bin2\`,
		DATE '1994-01-01' AS \`sql_date\`, { T "1994-01-01" } AS \`odbc_date\`,
		'my string', _utf8'your string', N'her string',
        TRUE, FALSE, UNKNOWN
	FROM DUAL
	-- space needed after '--'
	# 1 line comment
	/* multiline
	comment! */
	LIMIT 1 OFFSET 0;`;
    console.log(this.query);

  }
  setEditorContent(event: any) {
    // console.log(event, typeof event);
    console.log(this.query);
  }

}
