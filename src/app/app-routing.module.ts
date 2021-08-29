import { CrashListingResolverService } from './view/crash-listing/crash-listing.resolver.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrashDetailComponent } from './view/crash-detail/crash-detail.component';
import { CrashListingComponent } from './view/crash-listing/crash-listing.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'crash'},
  { path: 'crash', component: CrashListingComponent,resolve: { users: CrashListingResolverService } },
  { path: 'crash-detail', component: CrashDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
