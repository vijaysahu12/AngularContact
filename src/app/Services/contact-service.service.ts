import { Injectable } from '@angular/core';
import {Http , Headers, HttpModule, Response } from '@angular/http'
import { Contact, IContact } from 'app/models/contact'
import { jsonpFactory } from '@angular/http/src/http_module';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { PostService} from "app/Services/PostRequest";
import { _App } from 'app/app.global';
import { stringify } from 'querystring';
// import * from 'rxjs/content/map/'
@Injectable()
export class ContactServiceService {

  constructor(private _http: Http,private _PostService : PostService ) { }

  getContactList():Observable<IContact[]>{
    // alert('getContactList');
 
    return this._http.get('http://localhost:54801/api/Resume/GetContactList')
    .map((res:Response)=><IContact[]>res.json());
  }

  saveContact(Contact){
    let url  = _App.ContactController +_App.SaveContact;
    // this._PostService.PostMethod(url,Contact);
    this._PostService.PostMethod3();
  }
}
