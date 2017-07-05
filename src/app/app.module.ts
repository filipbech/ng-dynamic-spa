import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routes';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import {PagesModule} from './pages/pages.module';
import {SpotsModule} from './spots/spots.module';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './router.reuse.strategy';

import { CommerceModule } from './commerce/commerce.module';


@NgModule({
	imports: [
    SharedModule,
    HttpModule,

    routing,

    PagesModule,
    SpotsModule,
    CommerceModule
	],
  providers:[
    { 
      provide: RouteReuseStrategy, 
      useClass: CustomReuseStrategy 
    }
  ],
	declarations: [ AppComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}
