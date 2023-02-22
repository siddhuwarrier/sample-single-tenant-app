import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PoliciesTableComponent } from './policies-table/policies-table.component';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, PoliciesTableComponent],
  imports: [
    BrowserModule,
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
