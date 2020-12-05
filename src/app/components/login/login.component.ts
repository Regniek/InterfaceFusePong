import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,

  ) { }
  @Input() login: Login[] = [];
  

  ngOnInit() {
  }
  // tslint:disable-next-line: member-ordering
  inEmail: '';
  inPassword: '';

  signIn(){
    console.log('meejecuto')
    const newLogin: Login = {
      email: this.inEmail,
      password: this.inPassword,
    }
    console.log(newLogin)
    this.loginService.ingresar(newLogin)
      .subscribe(login =>{
      console.log(login)
    })
  }

}
