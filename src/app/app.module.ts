import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { Parent } from "./parent/parent.component";
import { Child } from "./child/child.component";

@NgModule({
  declarations:[AppComponent,HeaderComponent,Parent,Child],
  imports:[BrowserModule,FormsModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
