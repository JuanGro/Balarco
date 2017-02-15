import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

// Components
// import { CompletedDesignsListComponent } from './completed-designs-list.component';

// Services
// import { CompletedDesignsListService } from './completed-designs-list.service';

@Component({
  selector: 'completed-designs-list-modal',
  templateUrl: 'completed-designs-list.modal.html',
  moduleId: module.id,
})
export class CompletedDesignsListModalComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  // @Input() id: number;

  constructor() {}

  ngOnInit() {}
}
