import { Component, Input } from '@angular/core';

@Component({
	selector:'text-spot',
	template: `
		<div [innerHTML]="data.content" intercept-links></div>
	`
})
export class TextSpotComponent {

	static ref = 'text';

	@Input() public data;
	constructor() {}
}