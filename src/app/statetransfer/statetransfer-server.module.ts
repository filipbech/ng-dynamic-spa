import { NgModule,
        APP_BOOTSTRAP_LISTENER, 
        ApplicationRef, 
        RendererFactory2, 
        ViewEncapsulation
} from '@angular/core';

import { PlatformState } from '@angular/platform-server';

import { StatetransferService } from './statetransfer.service';

export function onBootstrap(appRef: ApplicationRef, platformState: PlatformState, rendererFactory: RendererFactory2, statetransferService:StatetransferService) {
  return () => {
    appRef.isStable
      .filter(stable => stable)
      .first()
      .subscribe(() => {
        try {
          const document: any = platformState.getDocument();
          const renderer = rendererFactory.createRenderer(document, {
            id: '-1',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
          });

          const html: any = Array.from(document.children).find((child: any) => child.name === 'html');
          const head = Array.from(html.children).find((child: any) => child.name === 'head');

          if (!head)
            throw new Error('<head> not found in the document');

          const script = renderer.createElement('script');
          renderer.setValue(script,'window["STATE_TRANSFER"] = '+JSON.stringify(statetransferService.dehydrate()));
          renderer.appendChild(head, script);
        } catch (e) {
          console.error(e);
        }

      });
  };
}

@NgModule({
    providers: [
      StatetransferService,
      {
          provide: APP_BOOTSTRAP_LISTENER,
          useFactory: onBootstrap,
          multi: true,
          deps: [
              ApplicationRef,
              PlatformState,
              RendererFactory2,
              StatetransferService
          ]
      }
    ]
})
export class StatetransferServerModule {}