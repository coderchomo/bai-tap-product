import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'product/list',component: ProductListComponent},
  {path:'product/create',component: ProductCreateComponent},
  {path:'product/view/:id',component: ProductViewComponent},
  {path:'',component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
