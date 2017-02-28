import { Component, Input } from '@angular/core';

@Component({
	selector:'subpage',
	template:`
		<h1>{{data.header}}</h1>
		<div class="content">
			<div class="full">
				<spots [spots]="data.spots"></spots>
			</div>
		</div>
	`
})
export class SubpageComponent {
	@Input() 
	public data;

	static ref = 'Subpage';

}