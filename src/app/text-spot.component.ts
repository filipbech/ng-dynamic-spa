import { Component, Input } from '@angular/core';

@Component({
	selector:'text-spot',
	template: `
		<div [innerHTML]="data.content"></div>
	`
})
export class TextSpotComponent {
	@Input()
	public data;
}