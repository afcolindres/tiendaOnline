import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { CardprodutdetailComponent } from './components/cardprodutdetail/cardprodutdetail.component';
import { ProductdetailtabsComponent } from './components/productdetailtabs/productdetailtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectronicsComponent,
    NavbarComponent,
    JeweleryComponent,
    CardProductComponent,
    SpinnerComponent,
    ProductdetailComponent,
    CardprodutdetailComponent,
    ProductdetailtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
