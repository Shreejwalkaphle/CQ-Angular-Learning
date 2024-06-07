import { Component } from "@angular/core";

@Component({
  selector:"parent-component",
  templateUrl:"./parent.component.html"
})
export class Parent{
  receiverFunction(receivedData:String){
  console.log(receivedData+" is received in parent");
  }
}