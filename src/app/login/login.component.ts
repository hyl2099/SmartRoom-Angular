import {Router} from '@angular/router';
import {TokensService} from '../core/tokens.service';
import {FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  background  = '../../assets/images/padel_0.jpg';
  private formModel: FormGroup;
  email: string;
  password: string;
  homeUrl: string;

  constructor(data: any, private tokensService: TokensService, private router: Router) {
    this.homeUrl = data.homeUrl;
  }
  login() {
    this.email = this.formModel.get('email').value;
    this.password = this.formModel.get('password').value;
    this.tokensService.login(this.email, this.password).subscribe(
      () => {
        sessionStorage.setItem('username', this.email);
        this.router.navigateByUrl('inicio');
      }
    );
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') || sessionStorage.getItem('username')) {
      this.router.navigateByUrl('inicio');
    }
  }
}

