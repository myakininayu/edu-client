import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import {tuiIconCopyLarge, tuiIconDeleteLarge} from "@taiga-ui/icons";

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

  @ViewChild('codemirror') codemirror: any;

  copyCode() {
    const code = this.codemirror.codeMirror.getValue();
    navigator.clipboard.writeText(code).then(() => {
      console.log('Код скопирован!');
    }, (error) => {
      console.error('Не удалось скопировать код:', error);
    });
  }

  clearCode() {
    this.codemirror.codeMirror.setValue("");
    this.codemirror.codeMirror.clearHistory();
    console.log('Код удален!');
  }

  setEditorContent(event: any) {
    console.log('Вы изменили код!');
  }

  protected readonly tuiIconCopyLarge = tuiIconCopyLarge;
  protected readonly tuiIconDeleteLarge = tuiIconDeleteLarge;
}
