import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoublePurePipe } from './DoublePure/double-pure.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DoublePurePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
