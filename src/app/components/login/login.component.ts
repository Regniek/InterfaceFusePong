import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  @Input() login: Login[] = [];
  @Input() user: User[]=[];


  ngOnInit() {

  }
  // tslint:disable-next-line: member-ordering
  inEmail= '';
  inPassword= '';

  redirect() {
    this.router.navigate(['project']);
}
 

  signIn(){
    const newLogin: Login = {
      email: this.inEmail,
      password: this.inPassword,
    }

    this.loginService.ingresar(newLogin)
      .subscribe(token =>{
      var ArrToken = Object.values(token);

      sessionStorage.setItem('Token', ArrToken[1] );
      sessionStorage.setItem('userEmail',this.inEmail);
      this.fetchUser(this.inEmail)
      this.ngOnInit()

    });
  }
  fetchUser( valor: any ) {
    this.userService.getEmailUser(valor)
    .subscribe(user =>{
      this.user = user;
      sessionStorage.setItem('userCompany',user[0].company);
      sessionStorage.setItem('userRef',user[0]._id);
      this.redirect()
    })
  }

}
