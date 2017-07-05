import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';

import { StatetransferServerModule } from './statetransfer/statetransfer-server.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'angular-plate'
    }),
    ServerModule,
    AppModule,
    StatetransferServerModule
  ]
})
export class ServerAppModule {

}
