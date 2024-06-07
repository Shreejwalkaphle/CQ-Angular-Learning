import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:"child-component",
  templateUrl:"./child.component.html"
})
export class Child{

  //@output decorator lagayena bhaney parent samma event emit nai hudaina. 
  //child to parent data send garna event ma output decorator laahayekai huna parcha mandatory.
  @Output()
  //1.child ma event define garincha jun child kai function le emit garcha
  //4.yo event child component jaha as a tag use bhayeko cha, tya raise huncha. 
  //5.eslai tya child component ko tag ma as an event catch garna parcha within small brackets()
  //6.esle emit gareko data parent ko html template, jaha child component as a tag use bha cha tya "$event" variable ma baseko huncha.

  eventTobeRaisedFromChild:EventEmitter<String> = new EventEmitter<String>();// esle jun type ko data emit garcha, parent ko receiver function ma pani tei type ma receive garinu parcha hai. aile String emit garcha bhaney uta parent ko receiver function ma pani String mai recieve garna parhca. esle object emit garcha bhaney uta parent le pani object nai receive garna parcha. 

  //2.child ko function jasle event bata data emit garaucha.
  //3.yo chai child component ko html template ma kunai arunai event occur huda call garincha.
  methodToEmitDataThroughEventFromChild(){
    this.eventTobeRaisedFromChild.emit("data emitted from child");
  }
}