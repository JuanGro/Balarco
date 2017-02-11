import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { Observable } from 'rxjs/Rx';

//Components
import { CompletedDesignsList } from './completed-designs-list';

//Services
import { CompletedDesignsListService } from './completed-designs-list.service';

@Component({
  selector: 'completed-designs-list',
  templateUrl: 'completed-designs-list.component.html',
  moduleId: module.id,
})
export class CompletedDesignsListComponent implements OnInit{
  @ViewChild('childModal') public childModal: ModalDirective;
  
  public documents: CompletedDesignsList[];
  public errorMessage: string;
  public mode = "Observable";

  @Input() document: CompletedDesignsList;

  public title: string;
  public body: string;
  public id: number;

  constructor(private completedDesignsListService: CompletedDesignsListService){
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  ngOnInit() {

  }

  getDocuments() {
    this.completedDesignsListService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }

  clicked(title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id;
  }
}
