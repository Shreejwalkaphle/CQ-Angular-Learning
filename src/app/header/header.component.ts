import { Component } from "@angular/core";
import { Testservice } from "../services/testservice.component";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  providers:[Testservice]
})
export class HeaderComponent{

  constructor(private testService:Testservice){
  }

callMe(){
  this.testService.serviceMethod();
}

}