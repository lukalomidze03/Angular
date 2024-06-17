import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundRedDirective } from './director/background-red.directive';
import { NotDirective } from './director/not.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundRedDirective,
    NotDirective,
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
