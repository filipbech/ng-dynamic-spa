import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import {GenericSpotDirective} from './generic-spot.directive';
import {SpotsComponent} from './spots.component'


import { TextSpotComponent } from './text-spot.component';
import { GallerySpotComponent } from './gallery-spot.component';


export const Spots = [TextSpotComponent, GallerySpotComponent];

@NgModule({
	declarations:[
		GenericSpotDirective,
		SpotsComponent,
		...Spots
	],
	entryComponents:[
		SpotsComponent,
		...Spots
	],
	imports:[
		SharedModule
	],
	exports:[
		SpotsComponent
	]
})
export class SpotsModule {}

