import { Component, OnInit } from '@angular/core';
import { InnovService } from '../../services/innovations/innov.service'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  title = 'Ajouter';


  angForm: FormGroup;

  constructor(private innovservice: InnovService, private fb: FormBuilder) {
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
  
  addInnov(name, author,imageURL,description,contact) {

      this.innovservice.addInnov(name, author,imageURL,description,contact)
      
  }
 

  
  ngOnInit() {
  }

  

}
