import { Component } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{
collectionOfObject:any=[
{name:"shreejwal",caste:"kaphle"},
{name:"ram",caste:"thapa"},
{name:"gorye",caste:"kaphle"}
];
}