import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { DhfComponent } from './dhf.component';

const routes: Routes = [
  {
    path: '',
    component: DhfComponent,
    children: [
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhfRoutingModule {}
