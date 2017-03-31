import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
		<router-outlet></router-outlet>
  `,
})
export class AppComponent {
	constructor() {}
}

export const pages = [{
		text:'Forside',
		link:'bICCgfCphK'
	},{
		text:'Underside 1',
		link:'bNWdVLeJOW'
	},{
		text:'Underside 2',
		link:'coDQrWQZxK'
	},{
		text:'Produkter',
		link:'bUGgYdIhQi'
	}];