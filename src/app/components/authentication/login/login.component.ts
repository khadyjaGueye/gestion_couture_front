import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = "";
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required),
    // });
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  submitLoginForm() {
    // Accéder aux données du formulaire à l'aide de la variable de référence
    const formData = this.loginForm.value;
    console.log(formData);
    return this.loginService.login(formData).subscribe(response => {
      if (response.status) {
        const token = response.token;
        const user = response.user;
        this.loginService.authenticateUser(user, token).subscribe(resp => {
          if (user.role == "admin") {
            this.router.navigateByUrl("/admin");
          }
        })
      } else {
        this.router.navigateByUrl("");
      }
    }, error => {
      console.error(error.error.message);
      this.message = error.error.message;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.message,
        timer: 2000
      })
    });

    // this.loginForm.reset();
  }
}
