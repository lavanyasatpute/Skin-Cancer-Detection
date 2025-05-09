import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignUpPageComponent {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.email, this.password, this.name).subscribe(
      (response) => {
        // Redirect to login after successful signup
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Sign Up failed', error);
      }
    );
  }
}
