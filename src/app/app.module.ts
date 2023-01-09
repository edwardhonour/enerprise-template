import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DeptListComponent } from './pages/dept-list/dept-list.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { PageHeaderComponent } from './widgets/page-header/page-header.component';
import { PageFooterComponent } from './widgets/page-footer/page-footer.component';
import { LeftNavbarComponent } from './widgets/left-navbar/left-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DeptListComponent,
    EmpListComponent,
    PageHeaderComponent,
    PageFooterComponent,
    LeftNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTablePaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
