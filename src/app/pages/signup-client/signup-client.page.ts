import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.page.html',
  styleUrls: ['./signup-client.page.scss'],
})
export class SignupClientPage implements OnInit {

  client = {} as Client;

  constructor(private router: Router, private signupService: SignupService) { }

  register(client: Client) {
    console.log(client);
    let postConsult: Observable<any>;
    postConsult = this.signupService.executePostRequest('/signupClient', client);
    postConsult.subscribe(res => {});
  }

  ngOnInit() {
  }

  routingSignin() {
    this.router.navigate(['/signin-client']);
  }

}
