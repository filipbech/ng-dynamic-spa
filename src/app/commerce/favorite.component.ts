import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector:'favorite',
	changeDetection:ChangeDetectionStrategy.OnPush,
	template:`
		<button 
			(click)="onToggle()" 
			class="fa"
			[class.fa-heart-o]="!product.isfavorite"
			[class.fa-heart]="product.isfavorite">
		</button>
	`
})
export class FavoriteComponent {

	@Input() product:boolean;

	@Output() private toggleFavorite = new EventEmitter();

	onToggle() {
		this.toggleFavorite.emit();
	}
}
