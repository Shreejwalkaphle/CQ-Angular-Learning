import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:"child-component",
  templateUrl:"./child.component.html"
})
export class Child{

  @Output()
  eventTobeRaisedFromChild:EventEmitter<String> = new EventEmitter<String>();

  
  methodToEmitDataThroughEventFromChild(){
    this.eventTobeRaisedFromChild.emit("data emitted from child");
  }
}