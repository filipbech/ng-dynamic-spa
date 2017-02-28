import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector:'product',
	changeDetection:ChangeDetectionStrategy.OnPush,
	template:`
		<div [style.opacity]="product.availability ? '1' : '0.5'">
			<h5>{{product.name}}</h5>
			<favorite [product]="product" (toggleFavorite)="onToggleFavorite()">fav</favorite>
			<div>Pris: {{product.price}}</div>
			<add-to-basket [product]="product" (purchase)="onPurchase($event)"></add-to-basket>
		</div>
	`
})
export class ProductComponent {
	@Input() 
	public product;

	@Output() public toggleFavorite = new EventEmitter();
	@Output() public purchase = new EventEmitter();

	onToggleFavorite() {
		this.toggleFavorite.emit(this.product);
	}

	onPurchase(count) {
		this.purchase.emit({count, product: this.product});
	}

}