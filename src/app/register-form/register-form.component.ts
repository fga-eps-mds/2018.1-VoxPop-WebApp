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

  constructor(private router:Router,
              private requester:RequestsService) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    var user : UserModel;
    var social_information : SocialInformationModel;
    user = { 
      id: 3,
      username: e.target.elements[0].value,
      first_name: e.target.elements[1].value,
      last_name: e.target.elements[2].value,
      password: e.target.elements[3].value,
      email: e.target.elements[5].value,
      social_information: {
        id: 3,
        uf: e.target.elements[8].value,
        city: e.target.elements[9].value,
        income: e.target.elements[10].value,
        education: e.target.elements[11].value,
        job: e.target.elements[12].value,
        birth_date: e.target.elements[13]
      }
     };
    console.log(user);      
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
            document.querySelector('#registerBtn').removeAttribute('disabled');
       }
       else {
         alert("Check all the boxes, please");
       }
 }

 clickReturnButton() {
      document.getElementById("firstPart").style.display = "block";
      document.getElementById("secondPart").style.display = "none";
      document.querySelector('#registerBtn').setAttribute('disabled', 'disabled');
}

}
