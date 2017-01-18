import { Directive, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

import {PageComponents} from './pages.module';

@Directive({
	selector:'[generic-page]'
})
export class GenericPageDirective {

	@Input() 
	private data;

	constructor(
		private _vcRef: ViewContainerRef, 
		private _cfResolver: ComponentFactoryResolver
	) { }

	ngOnChanges() {
		if(this.data) {
			this._vcRef.clear();
			const cf = this._cfResolver.resolveComponentFactory(PageComponents.find(component => component.ref === this.data.template));
			const _component = this._vcRef.createComponent(cf);
			_component.instance['data'] = this.data.data;
		}
	}
}
