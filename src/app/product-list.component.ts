import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
	selector:'product-list',
	template:`
		<button [style.fontWeight]="params.sortBy === 'name' ? 'bold' : ''" (click)="sort('name')">Navn</button>
		<button [style.fontWeight]="params.sortBy === 'price' ? 'bold' : ''" (click)="sort('price')">Pris</button>
		<button [style.fontWeight]="params.filter === 'isfavorite' ? 'bold' : ''" (click)="toggleShowFavorites()">Only favorites</button>
		<div class="items">
			<product *ngFor="let product of products" 
				[product]="product" 
				(toggleFavorite)="onToggleFavorite(product)"
				(purchase)="onPurchase($event)"></product>
		</div>
	`
})
export class ProductListComponent {

	private params = {
		sortBy: 'name',
		sortDir: '<',
		filter:''
	}

	private sortBy:string = 'name';
	private products: any[];

	toggleShowFavorites() {
		if (this.params.filter) {
			this.params.filter = '';
		} else {
			this.params.filter = 'isfavorite'
		}
		this.productsService.getProducts(this.params)
			.subscribe(products => {
				this.products = products;
			})
	}

	sort(key) {
		this.params.sortBy = key;
		this.productsService.getProducts(this.params)
			.subscribe(products => {
				this.products = products;
			})
	}

	onToggleFavorite(product) {
		this.productsService.toggleFavorite(product, this.params)
			.subscribe(products => {
				this.products = products;
			});
	}

	onPurchase(obj) {
		this.productsService.purchase(obj.product, obj.count, this.params)
			.subscribe(products => {
				this.products = products;
			});
	}


	constructor(private productsService :ProductsService) {
		this.productsService.getProducts(this.params)
			.subscribe(products => {
				this.products = products;
			})
	}
}