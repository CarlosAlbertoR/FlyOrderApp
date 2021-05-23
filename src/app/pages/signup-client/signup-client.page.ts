import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { SignupService } from 'src/app/services/signup.service';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.page.html',
  styleUrls: ['./signup-client.page.scss'],
})
export class SignupClientPage implements OnInit {

  client = {} as Client;
  form: FormGroup;

  constructor(
    private router: Router,
    private signupService: SignupService,
    private builder: FormBuilder
  ) { }

  register(client: Client) {
    console.log(client);
    let postConsult: Observable<any>;
    postConsult = this.signupService.executePostRequest('/signupClient', client);
    postConsult.subscribe(res => { });
  }

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{6,}$/)]],
      address: ['', [Validators.required, Validators.minLength(14)]],
      city: ['', [Validators.required, Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^(?:[0-9] ?){9,14}[0-9]$/)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.minLength(8), Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      password_check: ['', [Validators.required]]
    },
      { validator: ConfirmedValidator('password', 'password_check') }
    );
  }

  checkPasswords(password, password_check) { 
    return password === password_check ? null : { notSame: true }
  }

  routingSignin() {
    this.router.navigate(['/signin-client']);
  }

}

