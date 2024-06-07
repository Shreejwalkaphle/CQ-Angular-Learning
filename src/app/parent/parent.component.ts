import { Component } from "@angular/core";

@Component({
  selector:"parent-component",
  templateUrl:"./parent.component.html"
})
export class Parent{
  receiverFunction(receivedData:String){ //jun type ko data child le emit garcha tei type ko data parent le receive garcha.
  console.log(receivedData+" is received in parent");
  }
}