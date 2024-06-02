import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title = 'blockchain-shop-front-shell';
  user$ = this.auth.user$;
  clicks: number = 0;

  constructor(@Inject(DOCUMENT) private doc: Document, public auth: UserService) {
    window.addEventListener(
      "message",
      (event) => {
        console.log('message', event);
        if (event.data.topic === 'micro-frontend') {
          if (event.data.command === 'addToCart') {
            this.addToCart();
          } else if (event.data.command === 'removeFromCart') {
            this.removeFromCart();
          }
        }
      },
      false,
    );
  }
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

  addToCart(): void {
    // Call this to redirect the user to the login page
    this.clicks++;
  }
  removeFromCart(): void {
    // Call this to redirect the user to the login page
    if (this.clicks > 0)
      this.clicks--;
  }
}
