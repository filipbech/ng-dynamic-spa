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

	ngOnChanges(newData,oldData) {
		console.log(newData,oldData);
	}

	ngOnInit() {
		// DO DATA-SPECIFIC ALL BUILD-UP
		// AND TEAR-DOWN FROM ngOnChanges
	}

}