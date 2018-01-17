import { NgForm } from '@angular/forms/src/directives';
import { ContactServiceService } from '../../Services/contact-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  constructor(private _service : ContactServiceService){ }

  ngOnInit() {
  }
  submitContact(Contact : NgForm){
    
    this._service.saveContact(Contact)
 }
}
