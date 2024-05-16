import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from './toolbar/toolbar.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'blockchain-app.eu.auth0.com',
      clientId: 'P4DLrTwpiNvwL0twO4oCmYULfc2HHveY',
      authorizationParams: {
        redirect_uri: window.location.origin,
        scope: 'openid profile email user_metadata app_metadata picture'
      },
      cacheLocation: "localstorage"
    }),
    HttpClientModule,
    ToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
