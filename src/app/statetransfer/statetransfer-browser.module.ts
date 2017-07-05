import { NgModule } from '@angular/core';
import { StatetransferService } from './statetransfer.service';

@NgModule({
    providers: [
        StatetransferService
    ]
})
export class StatetransferBrowserModule {
    constructor(private statetransferService: StatetransferService) {
        this.statetransferService.rehydrate(window['STATE_TRANSFER']);
    }
}