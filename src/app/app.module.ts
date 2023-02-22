/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ApplicationRef, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PoliciesTableComponent } from './policies-table/policies-table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, PoliciesTableComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    RouterModule.forRoot([{ path: '', component: PoliciesTableComponent }]),
  ],
})
export class AppModule {
  /**
   * @description Bootstraps the application.
   * @param app - application reference during bootstrap phase.
   */
  public ngDoBootstrap(app: ApplicationRef): void {
    app.bootstrap(AppComponent);
  }
}
