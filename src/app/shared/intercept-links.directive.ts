import { Directive, HostListener, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    selector:'[intercept-links]'
})
export class InterceptLinksDirective {

	@HostListener('click', ['$event']) public onClick($event) {
		// Find the linkElement that was clicked 
		let linkEle = $event.target;

		// look up recursively until you find a linkElement
		// break when reaching container
		if(linkEle.tagName !== 'A') {
			while(linkEle.tagName !== 'A') {
				if(linkEle === this.elementRef.nativeElement) {
					return;
				}
				linkEle = linkEle.parentElement;
			}
		}

		// Create a Url based on the linkElements href		
		const url = new URL(linkEle.href);

		// Eject if the linkElement has a download-attribute
		if(linkEle.getAttribute('download') !== null) {
			return;
		}

		// Eject if link has a target
		if(linkEle.target === '_blank') {
			return;
		}

		// Eject if link points to another domain
		if(url.host !== location.host) {
			return;
		}

		// If you are still here, the router will take over and do the navitaion
		this.router.navigateByUrl(url.pathname);
		return false;
	}

    constructor(
		private router: Router,
		private elementRef: ElementRef
	) {}
}

