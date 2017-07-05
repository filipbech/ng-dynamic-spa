import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoSSRDirective } from './no-ssr.directive';

import { InterceptLinksDirective } from './intercept-links.directive';


@NgModule({
  declarations: [
    NoSSRDirective,
    InterceptLinksDirective
  ],
  imports: [
  	CommonModule,
  ],
  providers:[],
  exports:[
  	CommonModule,
    
    NoSSRDirective,
    InterceptLinksDirective
  ]
})
export class SharedModule {
}
