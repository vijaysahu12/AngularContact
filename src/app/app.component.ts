import { Component } from '@angular/core';
import { Contact , IContact } from "app/models/contact";
import { NgForm } from '@angular/forms';
import { ContactServiceService } from "app/Services/contact-service.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  contacts : IContact[];
  constructor(private _service : ContactServiceService){

  }

  ngOnInit(){
    alert("ngOnIniit");
    this.getContactList();
  }
  submitContact(Contact : NgForm){
    alert('working');
    this._service.saveContact(Contact)
  }
  getContactList(){
      this._service.getContactList()
      .subscribe(
        (callBackContactData)=>this.contacts = callBackContactData,
        (error)=> console.log(error));
  }
  getTotalContactCount(): number {
    return this.contacts.length;
  }
}