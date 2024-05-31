import { Routes }  from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { InformatComponent } from "./informat/informat.component"
import { ContactComponent } from './contact/contact.component'


export const routes:Routes=[
{
    path:'home',
    component:HomeComponent,
},
{
    path:'about',
    component:ContactComponent,
},
{
    path:'info',
    component:InformatComponent,
},
{
    path:'product',
   loadChildren: () => import('./products/products.module').then(a => a.ProductsModule)
},


 ]

 