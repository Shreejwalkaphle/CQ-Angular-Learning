// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Home route
  { path: 'project/:name', component: ProjectDetailComponent } // Dynamic route for project details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes{

}