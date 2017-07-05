import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import {AddToBasketComponent} from './add-to-basket.component';
import {FavoriteComponent} from './favorite.component';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list.component';

import {ProductsService} from './products.service';

@NgModule({
  declarations: [ 
  	AddToBasketComponent,
  	FavoriteComponent,
  	ProductComponent,
  	ProductListComponent
  ],
  providers:[
  	ProductsService
  ],
  imports:[
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class CommerceModule {
}
export {ProductListComponent} from './product-list.component';
