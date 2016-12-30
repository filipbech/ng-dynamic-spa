import { Directive, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

import { TextSpotComponent } from './text-spot.component';
import { GallerySpotComponent } from './gallery-spot.component';

export const Spots = [TextSpotComponent, GallerySpotComponent];

@Directive({
	selector:'[generic-spot]'
})
export class GenericSpotDirective {

	@Input() 
	private spotType;

	@Input() 
	private spotData;

	constructor(
		private _vcRef: ViewContainerRef, 
		private _cfResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		const cf = this._cfResolver.resolveComponentFactory(Spots.find(component => component.ref === this.spotType));
		const _component = this._vcRef.createComponent(cf);
		_component.instance['data'] = this.spotData;
	}
}