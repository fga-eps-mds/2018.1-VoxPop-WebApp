import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { UserModel } from '../../models/user';
import { SocialInformationModel } from '../../models/socialInformation'
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  valuePassword = '';
  valueInvalidPassword = '';
  valueUsername = '';
  valueEmail = '';
  password = '';
  confirmPassword = '';
  username = '';
  statusPassword = false;
  statusValidPassword = false;
  statusUsername = false;
  statusEmail = false;
  danger = '#d9534f';
  sucess = '#5cb85c';

  constructor(private router:Router,
              private requester:RequestsService) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    var user : UserModel;
    var social_information: SocialInformationModel;

    user = { 
      username: e.target.elements[0].value,
      first_name: e.target.elements[1].value,
      last_name: e.target.elements[2].value,
      password: e.target.elements[3].value,
      email: e.target.elements[5].value,
     };   
    // TODO - adicionar validação de criação. Checar http status code = 201.
    // AINDA é TODO /\
    this.requester.postUser(user).subscribe(response => {
      let statusUser = response.status;
      var userId = response.body["id"];
      console.log("STATUS CODE RETURNED ON USER: " + statusUser);

      if (this.requester.didSucceed(statusUser)) {
        social_information = {
          owner: userId,
          state: e.target.elements[7].value,
          city: e.target.elements[8].value,
          income: e.target.elements[9].value,
          education: e.target.elements[10].value,
          job: e.target.elements[11].value,
          birth_date: e.target.elements[12].value
        };
    
        this.requester.postSocialInformation(social_information).subscribe(response => {
          let statusSI = response.status;
          console.log("STATUS CODE RETURNED ON SOCIAL_INFORMATION: " + statusSI);
    
          if (this.requester.didSucceed(statusSI)) {
            this.router.navigate(['main-page']);  
          };
    
        });
      };
    });

  }

  onKeyPassword(e: any) {
    this.password = e.target.value;
    if(!this.isValidPassword(this.password)){
      this.valueInvalidPassword = 'Sua senha deve ter no mínimo 8 caracteres, dos quais: Um é numérico; Um é letra maiúscula; Um é caractere especial.';
      document.getElementById('alert-invalid-password').style.display = "block";
      this.statusValidPassword = false;
      this.borderColor('password', this.danger);
    } else {
      document.getElementById('alert-invalid-password').style.display = "none";
      this.statusValidPassword = true;
      this.borderColor('password', this.sucess);
    }
  }

  onKeyConfirmPassword(e: any) {
    this.confirmPassword = e.target.value;
  }

  onKeyUsername(e: any) {
    var username = e.target.value;
    if(this.isUsernameValid(username)){
      document.getElementById('alert-username').style.display = "none";
      this.valueUsername = '';
      this.statusUsername = true;
      this.borderColor('username', this.sucess);
    } else {
      this.valueUsername = 'TEST';
      document.getElementById('alert-username').style.display = "block";
      this.statusUsername = false;
      this.borderColor('username', this.danger);
    } if (!this.isUsernameSizeValid(username)) {
      this.valueUsername = 'Nome de usuário deve ter entre 4 e 20 caracteres'
      document.getElementById('alert-username').style.display = "block";
      this.statusUsername = false;
      this.borderColor('username', this.danger);
    } 
  }

  onKeyEmail(e: any) {
    var email = e.target.value;
    if(this.isEmailValid(email)){
      document.getElementById('alert-email').style.display = "none";
      this.valueEmail = '';
      this.statusEmail = true;
      this.borderColor('email', this.sucess);
    } else {
      document.getElementById('alert-email').style.display = "block";
      this.valueEmail = 'Formato do E-mail está incorreto';
      this.statusEmail = false;
      this.borderColor('email', this.danger);
    } if(email.length < 4) {
      document.getElementById('alert-email').style.display = "block";
      this.valueEmail = 'Formato do E-mail está incorreto';
      this.statusEmail = false;
      this.borderColor('email', this.danger);
    }
  }

  onKeyValidatorPassword(e: any) {
    if(this.isConfirmedPassword(this.confirmPassword, this.password)){
      document.getElementById('alert-password').style.display = "none";
      this.valuePassword = '';
      this.statusPassword = true;
      this.borderColor('confirm-password', this.sucess);
    } else {
      this.valuePassword = 'A confirmação de senha não corresponde';
      document.getElementById('alert-password').style.display = "block";
      this.statusPassword = false;
      this.borderColor('confirm-password', this.danger);
    }
  }

  isUsernameValid(username) {
    var format = /^[a-zA-Z0-9]+$/;
    if(format.test(username)){
      return true;
    }
    return false;
  }

  isUsernameSizeValid(username) {
    if (username.length > 3 && username.length < 21) {
      return true;
    }
    return false;
  }

  isEmailValid(email) {
    let EMAILRGX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(EMAILRGX.test(email)) {
      return true;
    }
    else {
      return false;
    }
  }

  isConfirmedPassword(password, confPassword) {
    if(password === confPassword){
      return true;
    }
    return false;
  }

  isValidPassword(password) {
    let PWDRGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%¨&*()'`{}~^:;<>,./?°ªº¹²³⁴⁵⁶⁷⁸⁹⁰£¢¬])[A-Za-z\d$@$!%*?&]{8,}/;
    if (PWDRGX.test(password)) {
      return true;
    }
    return false;
  }

  clickFirstButton() {
       if(this.statusPassword && this.statusUsername && this.statusEmail && this.statusValidPassword){
            document.getElementById("firstPart").style.display = "none";
            document.getElementById("secondPart").style.display = "block";
            document.querySelector('#registerBtn').removeAttribute('disabled');
       }
       else {
        if(!this.statusPassword) {
          this.borderColor('password', this.danger);
          this.borderColor('confirm-password', this.danger);
       } else {
        this.borderColor('password', this.sucess);
        this.borderColor('confirm-password', this.sucess);
       }

       if(!this.statusUsername){
        this.borderColor('username', this.danger);
       } else {
        this.borderColor('username', this.sucess);
       }

       if(!this.statusEmail){
        this.borderColor('email', this.danger);
       } else {
         this.borderColor('email', this.sucess);
       }
       }
 }

 borderColor(id, color){
  document.getElementById(id).style.borderColor = color;
}

 clickReturnButton() {
      document.getElementById("firstPart").style.display = "block";
      document.getElementById("secondPart").style.display = "none";
      document.querySelector('#registerBtn').setAttribute('disabled', 'disabled');
}

}
