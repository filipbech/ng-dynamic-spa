import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterState, Params } from '@angular/router';

import { PageResolve } from './page.resolve';

@Component({
	template:`
		<frontpage [data]="pageData.data" *ngIf="pageData?.template === 'Frontpage'"></frontpage>
		<subpage [data]="pageData.data" *ngIf="pageData?.template === 'Subpage'"></subpage>
		<subpage-sidebar [data]="pageData.data" *ngIf="pageData?.template === 'Subpage-sidebar'"></subpage-sidebar>
		<products-page [data]="pageData.data" *ngIf="pageData?.template === 'products'"></products-page>
	`
})
export class PageComponent {
	
	public pageData:any;

	constructor(private activatedRoute: ActivatedRoute, 
				private pageResolve: PageResolve
			) { }

	ngOnInit() {
		this.activatedRoute.url
			.filter(url => url.length>0)
			.switchMap((urlseg) => {
				return this.pageResolve.resolveUrlSegment(urlseg);
			})
			.subscribe(data => {
				this.pageData = data;
				document.title = this.pageData.title + ' - NG2 spa-POC';
			});

	}
}
