import { Headers, Http, HttpModule, RequestMethod, RequestOptions, Response ,Request } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { _App } from "app/app.global"
import { ResponseContentType } from '@angular/http/src/enums';


@Injectable()
export class PostService{
   
    headers:any;
    requestoptions:any;
    constructor(private _http:Http){
     
   }
    PostMethod2(URL,Body){
        let url:string;
        url = _App._URL;
      
        console.log(JSON.stringify(Body));
        url = url + URL;
        this.headers = new Headers();
      
        this.headers.append("Access-Control-Allow-Origin","*");
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Methods', '*');
        // this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'))
        console.log(url);
        console.log(this.headers);debugger;
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(Body),
            responseType : ResponseContentType.Json,
        
        })
 
        return this._http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                if (res) {
                    debugger;
                    return [{ status: res.status, json: res.json() }]
                }
                debugger;
            });

    }

    PostMethod(URL,Body){
        let url : string;
      
        
        url = _App._URL + URL;
        this.headers = new Headers();
        // this.headers.append("Access-Control-Allow-Origin","http://localhost:4200");
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        
        ///this.headers.append('Access-Control-Allow-Methods', '*');
        // this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'))
        debugger;
        console.log(JSON.stringify(Body));
        console.log(url);
        console.log(this.headers);
 
        return this._http.post("http://localhost:51857/api/contact/SaveContact",JSON.stringify(Body),{headers:this.headers})
            .map((res: Response) => {
                if (res) {
                    debugger;
                    return [{ status: res.status, json: res.json() }]
                }
                debugger;
            }).subscribe(data => {

                if(data!=null)
                
                {
                
                console.log(data);
                
                // perform operation on response data
                
                }
                
                });

    }
}