import {Component, Input, OnChanges} from '@angular/core';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.less']
})
export class CodeEditorComponent implements OnChanges{

  @Input() lang!: string;
  @Input() code!: string;

  ngOnChanges() {
    this.codeMirrorOptions.mode = this.lang;
  }

  codeMirrorOptions: any = {
    mode: this.lang,
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

  setEditorContent(event: any) {
    // console.log('Вы изменили код!');
    console.log(this.lang)
  }
}
