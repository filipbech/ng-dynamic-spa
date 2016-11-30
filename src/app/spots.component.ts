import { Component, Input } from '@angular/core';

@Component({
	selector:'spots',
	template: `
		<div *ngFor="let spot of spots">
			<text-spot [data]="spot" *ngIf="spot.type === 'text'"></text-spot>
			<gallery-spot [data]="spot" *ngIf="spot.type === 'gallery'"></gallery-spot>
		</div>
	`
})
export class SpotsComponent {
	@Input()
	public spots;
}