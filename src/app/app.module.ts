import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { AppRoutes } from "./app.routes";
import { DashboardComponent } from "./dashboard.component/dashboard.component";

@NgModule({
  declarations:[AppComponent,ProjectDetailComponent,DashboardComponent],
  imports:[BrowserModule,AppRoutes],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
