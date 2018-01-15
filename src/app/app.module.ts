import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactServiceService } from 'app/Services/contact-service.service'
import { PostService} from "app/Services/PostRequest";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactServiceService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
