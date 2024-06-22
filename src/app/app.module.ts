import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { FeatureModule } from "./featuremodule/feature.module";



@NgModule({
  declarations:[AppComponent,HeaderComponent],
  imports:[BrowserModule,FormsModule,FeatureModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
