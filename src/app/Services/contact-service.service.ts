import { Injectable } from '@angular/core';
import {Http , Headers, HttpModule, Response } from '@angular/http'
import { Contact, IContact } from 'app/models/contact'
import { jsonpFactory } from '@angular/http/src/http_module';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
// import * from 'rxjs/content/map/'
@Injectable()
export class ContactServiceService {

  constructor(private _http: Http) { }

  getContactList():Observable<IContact[]>{
    alert('getContactList');
 
    return this._http.get('http://localhost:54801/api/Resume/GetContactList')
    .map((res:Response)=><IContact[]>res.json());
  }

  saveContact(Contact): Observable<boolean>{
    var headers = new Headers(); 
    headers.append('Content-Type', 'application/json')
    headers.append("Access-Control-Allow-Origin","*");
    return this._http.post("http://localhost:54801/api/Resume/SaveContact",{ headers: headers }).map((response:Response)=><boolean>response.json());
  }
}
