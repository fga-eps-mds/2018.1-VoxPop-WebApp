import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { UserModel } from '../../models/user';
import { SocialInformationModel } from '../../models/socialInformation'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  values = '';
  password = '';
  statusPassword = 0; // 0 -> False and 1 -> True
  registerBtn = document.getElementById("registerBtn");


  constructor(private router:Router,
              private requester:RequestsService) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    console.log(e);
    var user : UserModel;
    user.username = e.target.elements[0].value;
    user.password = e.target.elements[1].value;
    user.email = e.target.elements[3].value;
    user.social_information.uf = e.target.elements[4].value;
    user.social_information.city = e.target.elements[5].value;
    user.social_information.education = e.target.elements[6].value;
    user.social_information.job = e.target.elements[7].value;
    user.social_information.birth_date = e.target.elements[8];
      
    // TODO - adicionar validação de criação. Checar http status code = 201.
    this.requester.postUser(user);

    this.router.navigate(['main-page']);


  }


  onKeyPass(e: any) {
    this.password = e.target.value;
  }

  onKey(e: any) {
    var confirmPassword = e.target.value;

    if(this.validator(confirmPassword, this.password)){
      document.getElementById('alert').style.display = "none";
      this.values = '';
      this.statusPassword = 1;
    }
    else {
      this.values = 'Passwords do not match!';
      document.getElementById('alert').style.display = "block";
      this.statusPassword = 0;
    }
  }

  validator(password, confPassword) {
      if(password === confPassword){
        return true;
      }
      else
      {
        return false;
      }
  }

  clickFirstButton() {
       if(this.statusPassword == 1){
            document.getElementById("firstPart").style.display = "none";
            document.getElementById("secondPart").style.display = "block";
       }
       else {
         alert("Check all the boxes, please");
       }
 }

 clickReturnButton() {
      document.getElementById("firstPart").style.display = "block";
      document.getElementById("secondPart").style.display = "none";
}

}
