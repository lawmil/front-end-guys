import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
