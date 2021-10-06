import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent, FormatType, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { AuthService } from '../../../../../@shared/services/auth.service';
import { LocaleService } from '../../../../@shared/services/locale.service';
import { SchedulerEvent } from '../../models/scheduler-event.model';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: [ './document-editor.component.scss' ],
  providers: [ ToolbarService ]
})
export class DocumentEditorComponent implements OnInit {
  @Input() event?: SchedulerEvent;
  @Output() saveReport: EventEmitter<true> = new EventEmitter<true>();
  @ViewChild('documenteditor_default') container: DocumentEditorContainerComponent;
  culture: string = 'fr-BE';
  isEdited: boolean = false;
  isFullscreen: boolean = false;

  constructor(
    public authService: AuthService,
    public localeService: LocaleService,
  ) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.container.documentEditor.open(JSON.parse(this.event.Meta.report));
    this.isEdited = false;
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
    setTimeout(() => this.container.resize(), 100);
  }

  onContentChange(): void {
    this.isEdited = true;
  }

  onPrint(): void {
    this.container.documentEditor.print();
  }

  onDownload(format: FormatType = 'Docx'): void {
    this.container.documentEditor.save(this.event.Subject, format);
  }

  onSave(format: FormatType = 'Sfdt'): void {
    this.event.Meta.report = this.container.documentEditor.serialize();

    this.saveReport.emit(true);
  }
}
