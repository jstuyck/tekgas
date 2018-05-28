import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/modules/home/components/home.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true ,
        useHash: false} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
