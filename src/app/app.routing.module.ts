import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Product } from "./products/product.component";

const routes:Routes = [{
  path:'product', component:Product
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}