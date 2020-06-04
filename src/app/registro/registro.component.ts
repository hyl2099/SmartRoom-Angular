import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  background = '../../assets/images/padel_0.jpg';
  private showwrong = false;
  private showregister = false;
  private showrexists = false;
  private formModel: FormGroup;
  private username;
  private password;
  private email;
  private repeatpassword;
  private baseurl = 'http://fenw.etsisi.upm.es:10000';
  private registerurl = '';
  private mytoken = '';
  private jsonobj = null;

  constructor(private http: HttpClient, private router: Router) {
    this.formModel = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeatpassword: new FormControl()
    })
  }

  ngOnInit() {
  }

  checkUser() {
    this.username = this.formModel.get('username').value;
    return this.http.get(this.registerurl + '/' + this.username,{observe: 'response'})
      .subscribe(
        response => {
          this.showrexists = true;
        },
        error => {
          if(status === '404'){
          this.showrexists = false;
        }});
  }

  register() {
    this.username = this.formModel.get('username').value;
    this.password = this.formModel.get('password').value;
    this.repeatpassword = this.formModel.get('repeatpassword').value;
    this.email = this.formModel.get('email').value;
    this.registerurl = this.baseurl + '/users?username=' + this.username + '&password=' + this.password + '&email=' + this.email;

    if (this.repeatpassword === this.password) {
      if (this.showrexists === false) {
        return this.http.post(this.registerurl + this.username, {
          username: this.username,
          password: this.password,
          email: this.email
        }, {observe: 'response'})
          .subscribe(response => {
            this.mytoken = response.headers.get('Authorization');
            this.jsonobj = response.body;
            return this.http.get('http://fenw.etsisi.upm.es:10000' + '/users/login?username=' + this.username + '&password=' + this.password, {observe: 'response'})
              .subscribe(response => {
                this.mytoken = response.headers.get('Authorization');
                this.jsonobj = response.body;
                sessionStorage.setItem('token', this.mytoken);
                sessionStorage.setItem('username', this.username);
                this.router.navigateByUrl('menu');
                this.router.navigateByUrl('inicio');
                this.showregister = true;
              });
          });
      }
    }
  }
}
