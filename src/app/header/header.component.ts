import { Component } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{
  name:String='';
  callMe(receiveEvent:any){
    this.name=receiveEvent.target.value;
  }
}