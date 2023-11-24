import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventpageComponent } from './eventpage/eventpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaypageComponent } from './paypage/paypage.component';
import { EventcreateComponent } from './eventcreate/eventcreate.component';

const routes: Routes = [
  {path:'eventpage', component: EventpageComponent},
  {path:'stronagłówna', component:NavbarComponent},
  {path:'stronapłatności',component:PaypageComponent},
  {path:'stworzevent',component:EventcreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
