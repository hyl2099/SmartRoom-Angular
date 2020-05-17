import {Router} from '@angular/router';
import {TokensService} from '../core/tokens.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {LoginDialogComponent} from '../core/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  background  = '../../assets/images/padel_0.jpg';
  private formModel: FormGroup;
  private password = '';
  private email = '';

  // private tokensService: TokensService,
  constructor( private router: Router, private dialog: MatDialog) {
    this.formModel = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  login() {
    this.dialog.open(LoginDialogComponent,
      {
        data: {homeUrl: 'home'}
      }
    );


    // this.email = this.formModel.get('email').value;
    // this.password = this.formModel.get('password').value;
    // this.tokensService.login(this.email, this.password).subscribe(
    //   () => {
    //     sessionStorage.setItem('email', this.email);
    //     this.router.navigateByUrl('inicio');
    //   }
    // );
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') || sessionStorage.getItem('username')) {
      this.router.navigateByUrl('inicio');
    }
  }
}

