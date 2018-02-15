import { InnovService } from '../../services/innovations/innov.service'
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  innovs: any;

  constructor(private http: HttpClient, private service: InnovService) {}

  ngOnInit() {
    this.getInnov();
  }

  getInnov() {
    this.service.getInnov().subscribe(res => {
      this.innovs = res;
    });
  } 
  
  
  deleteCoin(id) {
    this.service.deleteInnov(id).subscribe(res => {
      console.log('Deleted');
    });
}



}