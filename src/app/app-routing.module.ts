import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';

import { GenerateScheduleComponent } from './generate-schedule/generate-schedule.component';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,   // ✅ always load layout
    children: [
      { path: 'generate', component: GenerateScheduleComponent },
      { path: 'edit', component: EditScheduleComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
