import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector:'frontpage',
	template:`
		<h1>{{data.header}}</h1>
		<img [src]="data.heroImage" alt="" />

		<div class="content">
			<div class="full">
				<spots [spots]="data.spots"></spots>
			</div>
		</div>
	`
})
export class FrontpageComponent {
	static ref = 'Frontpage'; //Template-reference

	@Input() public data;

}








