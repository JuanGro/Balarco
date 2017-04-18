import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Interface
import { CompletedDesignsList } from './completed-designs-list';

@Component({
  selector: 'completed-designs-list-modal',
  templateUrl: 'completed-designs-list.modal.html',
  moduleId: module.id,
})
export class CompletedDesignsListModalComponent implements OnInit {
  // Send to the child the data
  @Input('docs') docs: CompletedDesignsList;
  // Receive the request to show the modal
  @Output() uploaded: EventEmitter<string> = new EventEmitter();
  @Output() notify: EventEmitter<CompletedDesignsList> = new EventEmitter<CompletedDesignsList>();

  public constructor() { }

  uploadComplete() {
    this.uploaded.emit('complete');
  }

  onClick(object) {
    this.notify.emit(object);
  }

  ngOnInit() {}

}
