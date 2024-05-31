import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InformatComponent } from './informat/informat.component';
import { routes } from './app.routing';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    InformatComponent,  
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
