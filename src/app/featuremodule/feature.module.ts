import { NgModule } from "@angular/core";
import { Parent } from "../parent/parent.component";
import { Child } from "../child/child.component";

@NgModule({
  declarations: [Parent,Child],
  exports: [Parent,Child]
})
export class FeatureModule{

}