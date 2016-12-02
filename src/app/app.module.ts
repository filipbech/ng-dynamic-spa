//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

//Providers
import { PageResolve } from './page.resolve';
import { ProductsService } from './products.service';

//Components
import { AppComponent } from './app.component';
import { PageComponent } from './page.component';
import { FrontpageComponent } from './frontpage.component';
import { SubpageComponent } from './subpage.component';
import { SubpageSidebarComponent } from './subpage-sidebar.component';
import { ProductsPageComponent } from './products-page.component';
import { SpotsComponent } from './spots.component';

import { GallerySpotComponent } from './gallery-spot.component';
import { TextSpotComponent } from './text-spot.component';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
import { FavoriteComponent } from './favorite.component';
import { AddToBasketComponent } from './add-to-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FrontpageComponent,
    SubpageComponent,
    SubpageSidebarComponent,
    SpotsComponent,
    GallerySpotComponent,
    TextSpotComponent,
    ProductListComponent,
    ProductComponent,
    FavoriteComponent,
    AddToBasketComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PageResolve,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
