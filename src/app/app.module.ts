import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

import {PagesModule} from './pages/pages.module';
import {SpotsModule} from './spots/spots.module';


import { CommerceModule } from './commerce/commerce.module';

@NgModule({
  declarations: [ 
  	AppComponent
  ],
  imports: [
  	SharedModule,
  	routing,

  	PagesModule,
  	SpotsModule,

  	CommerceModule
  ],
})
export class AppModule {
}
export { AppComponent } from './app.component';