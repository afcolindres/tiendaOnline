import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'jewelery', component: JeweleryComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
