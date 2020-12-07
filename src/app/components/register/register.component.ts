import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { UserService } from '../../services/user.service';
import { User, User1 } from '../../models/user';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // tslint:disable-next-line: member-ordering
  companies: Company[] = [] ;
  xEmail='';
  yEmail='';
  xFirstName='';
  xLastName='';
  xPassword='';
  yPassword='';
  xCompany='';

  constructor(
    private userService: UserService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  @Input() company: Company[] = [];


  ngOnInit() {
    this.fetchCompany();
  }
  fetchCompany() {
    this.companyService.getCompanys()
    .subscribe(companies =>{
      this.companies = companies;
    })
  }

  companyId(a:any){
      this.xCompany = a;
  }

  redirect() {
    this.router.navigate(['login']);
}

  signUp(){
    if (this.xEmail == this.yEmail){
      if (this.xPassword == this.yPassword){
        if (this.xPassword.length > 9){
          if(this.xCompany!=''){

            const newUser: User1 = {
              first_name:  this.xFirstName,
              last_name: this.xLastName,
              password: this.xPassword,
              company: this.xCompany,
              email: this.xEmail,
            }
            this.userService.postUser(newUser)
              .subscribe(user =>{
              this.ngOnInit()
            })
            this.redirect();

          }else{
            alert('Escoge una compañia')
          }
        }else{
          alert('La Contraseña debe ser mayor a 10 Caracteres')
        }
      }else{
        alert('La Contraseña no coincide')
      }

    }else{
      alert('El Email no coincide')
    }
  }
}
