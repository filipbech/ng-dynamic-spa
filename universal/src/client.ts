// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './__workaround.browser'; // temporary until 2.1.1 things are patched in Core

import { bootloader } from '@angularclass/bootloader';

// Angular 2
//import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal/browser';

// enable prod for faster renders
// enableProdMode();

import { MainModule } from './browser.module';

export const platformRef = platformUniversalDynamic();

// on document ready bootstrap Angular 2
export function main() {
	console.log('export main!');
  return platformRef.bootstrapModule(MainModule);
}
bootloader(main);


console.log('not aot');
