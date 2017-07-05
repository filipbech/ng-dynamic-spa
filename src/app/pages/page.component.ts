import { Component, ComponentFactoryResolver, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot } from '@angular/router';
import { PageComponents } from './pages.module';
import { Title } from '@angular/platform-browser';

@Component({
	changeDetection:ChangeDetectionStrategy.OnPush,
	template: ' ' //Template cannot be empty
})
export class PageComponent {
	constructor(
		private activatedRoute: ActivatedRoute, 
		private cfResolver: ComponentFactoryResolver,
		private viewContainer: ViewContainerRef,
		private title:Title
	) {}

	ngOnInit() {
		//Read the content from the route snapshot ('content' is the name of the resolve)
		const content = this.activatedRoute.snapshot.data['content'];

		//Find the ComponentClass of the desired pageComponent (based on template)
		const ComponentClass = PageComponents.find(component => component.ref === content['template']);

		this.title.setTitle(content.title);

		//Resolve the ComponentFactory
		const pageComponentFactory = this.cfResolver.resolveComponentFactory(ComponentClass);

		//Create the component, attach it to the viewContainer and bind the data
		const pageComponent = this.viewContainer.createComponent(pageComponentFactory);
		pageComponent.instance['data'] = content.data;
	}
}