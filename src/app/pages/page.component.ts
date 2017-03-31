import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterState, Params } from '@angular/router';

import { PageResolve } from './page.resolve';
import {pages} from '../app.component';

@Component({
	template:`
		<ul class="navigation">
			<li *ngFor="let page of pages"><a [routerLink]="['/',page.link]">{{page.text}}</a></li>
		</ul>
		<div generic-page [data]="pageData"></div>
	`
})
export class PageComponent {
	
	public pageData:any;
	public pages:any[];

	constructor(private activatedRoute: ActivatedRoute, 
				private pageResolve: PageResolve
			) { }

	ngOnInit() {

		this.pages = pages;

		this.activatedRoute.data.subscribe(data=> {
			this.pageData = data['content'];
		});
	}
}
