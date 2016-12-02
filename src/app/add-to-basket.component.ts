import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector:'add-to-basket',
	changeDetection:ChangeDetectionStrategy.OnPush,
	template:`
		<div *ngIf="!product.basketCount">
			<button (click)="buy(1)" [disabled]="!product.availability">Køb</button>
		</div>
		<div *ngIf="product.basketCount">
			<button (click)="buy(product.basketCount-1)">-</button>
			{{product.basketCount}}
			<button (click)="buy(product.basketCount+1)">+</button>
		</div>
	`
})
export class AddToBasketComponent {

	@Input()
	private product;

	@Output()
	private purchase = new EventEmitter;

	buy(count) {
		this.purchase.emit(count);
	}

}