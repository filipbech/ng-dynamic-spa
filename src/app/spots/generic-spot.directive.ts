import { Directive, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

import { Spots } from './spots.module';

@Directive({
	selector:'[generic-spot]'
})
export class GenericSpotDirective {

	@Input() public spotType: string;

	@Input() public spotData;

	constructor(
		private viewContainer: ViewContainerRef, 
		private cfResolver: ComponentFactoryResolver
	) { }

	ngOnChanges(change) {
		if(change) {
			//Start out by clearing the view container
			this.viewContainer.clear();

			//Find the ComponentClass of the desired spotComponent (based on spotType)
			const componentClass = Spots.find(component => component.ref === this.spotType);

			//Resolve the ComponentFactory
			const spotComponentFactory = this.cfResolver.resolveComponentFactory(componentClass);
			
			//Create the component, attach it to the viewContainer and bind the data
			const spotComponent = this.viewContainer.createComponent(spotComponentFactory);
			spotComponent.instance['data'] = this.spotData;
		}
	}
}