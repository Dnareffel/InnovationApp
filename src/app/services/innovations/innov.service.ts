import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InnovService {

  result: any;
  constructor(private http: HttpClient) {}

  addInnov(name, author, imageURL, description, contact) {
    const uri = 'https://peaceful-retreat-26329.herokuapp.com/innov/add';
    const obj = {
      name: name,
      author:author,
      imageURL: imageURL,
      description : description,
      contact :contact,
    
     
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getInnov() {
    const uri = 'https://peaceful-retreat-26329.herokuapp.com/innov';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editInnov(id) {
    const uri = 'https://peaceful-retreat-26329.herokuapp.com/innov/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateInnov(name, author, imageURL, description, contact,id) {
    const uri = 'https://peaceful-retreat-26329.herokuapp.com/innov/update/' + id;

    const obj = {
      name: name,
      author:author,
      imageURL: imageURL,
      description : description,
      contact :contact,
    
      
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteInnov(id) {
    const uri = 'https://peaceful-retreat-26329.herokuapp.com/innov/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}