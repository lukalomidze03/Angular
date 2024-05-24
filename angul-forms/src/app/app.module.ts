import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { From1Component } from './from-1/from-1.component';
import { From2Component } from './from-2/from-2.component';
import { From3Component } from './from-3/from-3.component';
import { Table1Component } from './table-1/table-1.component';

@NgModule({
  declarations: [
    AppComponent,
    From1Component,
    From2Component,
    From3Component,
    Table1Component,


  ],
  imports: [
    BrowserModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
