import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
  <button (click)="login()">Login</button>
  `
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login(username: string, password: string) {

  if (!username || !password) {
    console.log('Campos requeridos');
    return;
  }

  this.authService.login(username, password)
    .subscribe(res => console.log('Validation', res));
}

}
