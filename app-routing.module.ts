import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { TechComponent } from './tech/tech.component';
const routes: Routes = [
  {path:'',component:HeadComponent},
  {path:'tech',component:TechComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
