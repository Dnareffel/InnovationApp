import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InnovService } from '../../services/innovations/innov.service'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  title = 'Editer';
  constructor(private route: ActivatedRoute, private router: Router, private service: InnovService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      author: ['', Validators.required ],
      description: ['', Validators.required ],
      imageURL: ['', Validators.required ],
      contact: ['', Validators.required ],
   });
  }

  updateCoin(name,author,description,imageURL,contact) {
    this.route.params.subscribe(params => {
    this.service.updateInnov(name, author,description,imageURL,contact, params['id']);
    
  });
}

deleteCoin(id) {
  this.service.deleteInnov(id).subscribe(res => {
    console.log('Deleted');
  });
}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editInnov(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }


}