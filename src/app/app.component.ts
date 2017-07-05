import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
		<ul #mainNav class="navigation">
			<li *ngFor="let page of pages"><a [routerLink]="['/',page.link]">{{page.text}}</a></li>
		</ul>
		<router-outlet></router-outlet>
  `,
})
export class AppComponent {
	pages = pages;
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