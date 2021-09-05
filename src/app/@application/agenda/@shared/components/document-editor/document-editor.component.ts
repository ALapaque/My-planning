import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DocumentEditorContainerComponent, ToolbarService} from '@syncfusion/ej2-angular-documenteditor';
import {AuthService} from '../../../../../@shared/services/auth.service';
import {defaultDocument} from './data';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss'],
  providers: [ToolbarService]
})
export class DocumentEditorComponent implements OnInit {
  @Input() public document?: string;
  @ViewChild('documenteditor_default') public container: DocumentEditorContainerComponent;
  public culture: string = 'fr-BE';
  public isEdited: boolean = false;
  public isFullscreen: boolean = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.container.documentEditor.open(this.document);
    this.isEdited = false;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    setTimeout(() => this.container.resize(), 100);
  }

  onContentChange() {
    this.isEdited = true;
  }
}
