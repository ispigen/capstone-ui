import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  {path : '', component : SidebarComponent},
  {path: 'edit', component: EditScheduleComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
