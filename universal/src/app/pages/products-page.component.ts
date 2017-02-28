import { Component, Input } from '@angular/core';

@Component({
	selector:'products-page',
	template:`
		<h1>{{data.header}}</h1>
		<div [innerHTML]="data.content"></div>
		<product-list></product-list>
	`
})
export class ProductsPageComponent {
	@Input() 
	public data;

	static ref = 'products';

}