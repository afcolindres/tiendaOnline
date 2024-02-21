import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'electronics', component: ElectronicsComponent
  ,
  //   children:[
  //     {path: 'detail', component:Productdetail2Component}
  //   ]
  },
  {path: 'jewelery', component: JeweleryComponent},
  {path: 'productdetail/:id', component: ProductdetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
