import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ResultComponent} from './result/result.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdzRoutingModule {
}
