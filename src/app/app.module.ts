//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

//Providers
import { PageResolve } from './page.resolve';
import { ProductsService } from './products.service';

//Components
import { AppComponent } from './app.component';

// Page-layout components
import { PageComponent } from './page.component';
import { GenericPageDirective, PageComponents } from './generic-page.directive';

// Spots components
import { SpotsComponent } from './spots.component';
import { GenericSpotDirective, Spots } from './generic-spot.directive';

//other components
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
import { FavoriteComponent } from './favorite.component';
import { AddToBasketComponent } from './add-to-basket.component';

@NgModule({
  declarations: [
    AppComponent,

    //dynamic pages
    PageComponent,
    GenericPageDirective,
    PageComponents,

    //dynamic spots
    SpotsComponent,
    GenericSpotDirective,
    Spots,

    //other components
    ProductListComponent,
    ProductComponent,
    FavoriteComponent,
    AddToBasketComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    PageResolve,
    ProductsService
  ],
  entryComponents:[
    Spots,
    PageComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


