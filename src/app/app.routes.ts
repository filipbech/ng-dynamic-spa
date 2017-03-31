import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PageComponent} from './pages/pages.module';
import {PageResolve} from './pages/page.resolve';

const appRoutes: Routes = [
  {
    path: '**',
    resolve:{
    	content: PageResolve
    },
    component: PageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);