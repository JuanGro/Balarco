import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { CompletedDesignsList } from './completed-designs-list';
import { DjangoService } from './../django.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'completed-designs-list',
  templateUrl: 'completed-designs-list.component.html',
  moduleId: module.id,
})
export class CompletedDesignsListComponent implements OnInit{
  pageTitle: string = "document from django"
  documents: CompletedDesignsList[];
  errorMessage: string;
  mode = "Observable";

  constructor(private djangoService: DjangoService){
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  ngOnInit() {

  }

  getDocuments() {
    this.djangoService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
}
