import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './data.resolver';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoggedinGuard } from './loggedin.guard';
import { DeptListComponent } from './pages/dept-list/dept-list.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, resolve: { data: DataResolver }, canActivate: [LoggedinGuard] },
  { path: 'dept-list', component: DeptListComponent, resolve: { data: DataResolver }, canActivate: [LoggedinGuard] },
  { path: 'emp-list', component: EmpListComponent, resolve: { data: DataResolver }, canActivate: [LoggedinGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
