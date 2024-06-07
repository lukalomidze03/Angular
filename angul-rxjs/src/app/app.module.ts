import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsconteinerComponent } from './rxjsconteiner/rxjsconteiner.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsconteinerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
