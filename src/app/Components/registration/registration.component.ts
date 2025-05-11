import { Component } from '@angular/core';
import { AuthServiceService } from '../../Service/auth-service.service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
 user = {
    fullName: '',
    education: '',
    address: '',
    email: '',
    password: ''
  };

  constructor (private authService: AuthServiceService) {

  }

  signup() {
    this.authService.register(this.user).subscribe(
    (result: any) => {
      alert(result.message);
      console.log("register doctor", result.doctor_name);
    },
    error => {
      alert("registration failed. Please try again");
      console.log("Error during registration", error);
    }
    );
  }
}
