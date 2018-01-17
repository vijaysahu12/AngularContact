import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactServiceService } from 'app/Services/contact-service.service'
import { PostService} from "app/Services/PostRequest";
import { AppComponent } from './app.component';
import { CreateContactComponent } from "./Components/create-contact/create-contact.component";
import { ListContactComponent } from './Components/list-contact/list-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [ContactServiceService,PostService],
  bootstrap: [AppComponent,CreateContactComponent,ListContactComponent]
})
export class AppModule { }
