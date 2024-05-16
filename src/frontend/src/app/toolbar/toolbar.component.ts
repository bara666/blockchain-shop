import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title = 'blockchain-shop-front-shell';
  user$ = this.auth.user$;

  constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) { }
  ngOnInit(): void {

  }
  login(): void {
    // Call this to redirect the user to the login page
    //alert('login');
    this.auth.loginWithPopup();
  }

  logout(): void {
    // Call this to redirect the user to the login page
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin
      }
    });
  }
}
