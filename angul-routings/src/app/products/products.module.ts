import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import {  RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'tv',
    component:TvComponent
  },
  {
    path:'mobile',
    component:MobileComponent
  }
]


@NgModule({
  declarations: [
    ProductsComponent,
    MobileComponent,
    TvComponent,
    MobileComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  
  ]
})
export class ProductsModule { }
