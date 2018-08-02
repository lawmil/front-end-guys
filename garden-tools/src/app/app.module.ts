import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    NavBarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
