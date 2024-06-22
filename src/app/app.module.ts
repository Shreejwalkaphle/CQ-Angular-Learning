import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { Parent } from "./parent/parent.component";
import { Child } from "./child/child.component";
import { Component1 } from "./containers/container1/container1.component";
import { Product } from "./products/product.component";
import { AppRoutingModule } from "./app.routing.module";



@NgModule({
  declarations:[AppComponent,HeaderComponent,Parent,Child,Component1,Product],
  imports:[BrowserModule,FormsModule,AppRoutingModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
