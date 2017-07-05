import { Directive, TemplateRef, ViewContainerRef, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformServer } from '@angular/common';

/**
 * Disables rendering of DOM element on the server.
 * 
 * Usage:
 * 
 *  <div *noSSR>
 *      This content will not be rendered by the server!
 *  </div>
 */
@Directive({ selector: '[noSSR]',  })
export class NoSSRDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        @Inject(PLATFORM_ID) private platformId: Object
    ){
        if (isPlatformServer(this.platformId)) {
            this.viewContainer.clear();
        } else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}