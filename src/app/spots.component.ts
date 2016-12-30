import { Component, Input } from '@angular/core';

@Component({
	selector:'spots',
	template: `
		<div *ngFor="let spot of spots"
			generic-spot 
			[spotType]="spot.type" 
			[spotData]="spot"></div>
	`
})
export class SpotsComponent {
	@Input()
	public spots;

}