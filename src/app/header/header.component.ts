import { Component } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{
  searchText:String = "enter your searchText"
}