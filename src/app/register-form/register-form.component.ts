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


  onKeyPassword(e: any) {
    this.password = e.target.value;
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
    } else {
      this.valueUsername = 'Digite apenas letras e números';
      document.getElementById('alert-username').style.display = "block";
      this.statusUsername = false;
    } if (username.length < 4 || username.length > 20) {
      this.valueUsername = 'Nome de usuário deve ter entre 4 e 20 caracteres'
      document.getElementById('alert-username').style.display = "block";
      this.statusUsername = false;
    } 
  }

  onKeyEmail(e: any) {
    var email = e.target.value;
    if(this.isEmailValid(email)){
      document.getElementById('alert-email').style.display = "none";
      this.valueEmail = '';
      this.statusEmail = true;
    } else {
      document.getElementById('alert-email').style.display = "block";
      this.valueEmail = 'Formato do E-mail está incorreto';
      this.statusEmail = false;
    } if(email.length < 4) {
      document.getElementById('alert-email').style.display = "block";
      this.valueEmail = 'Formato do E-mail está incorreto';
      this.statusEmail = false;
    }
  }

  onKeyValidatorPassword(e: any) {
    if(this.isConfirmedPassword(this.confirmPassword, this.password)){
      document.getElementById('alert-password').style.display = "none";
      this.valuePassword = '';
      this.statusPassword = true;
    } else {
      this.valuePassword = 'A confirmação de senha não corresponde';
      document.getElementById('alert-password').style.display = "block";
      this.statusPassword = false;
    }
    if(this.isValidPassword(this.password)){
        document.getElementById('alert-invalid-password').style.display = "none";
        this.statusValidPassword = true;
    } else {
        this.valueInvalidPassword = 'A senha deve ter entre 6 e 30 caracteres';
        document.getElementById('alert-invalid-password').style.display = "block";
        this.statusValidPassword = false;
    }
    
  }

  isUsernameValid(username) {
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(format.test(username)){
      return false;
    }
    else{
      return true;
    }
  }

  isEmailValid(email) {
    var format1 = /[ @]/;
    var format2 = /[ .]/;
    if(format1.test(email) && format2.test(email)) {
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
    if (password.length > 5 && password.length < 31) {
      return true;
    }
    return false;
  }

  clickFirstButton() {
       if(this.statusPassword && this.statusUsername && this.statusEmail){
            document.getElementById("firstPart").style.display = "none";
            document.getElementById("secondPart").style.display = "block";
            document.querySelector('#registerBtn').removeAttribute('disabled');
       }
       else {
         alert("Por favor, cheque os campos");
       }
 }

 clickReturnButton() {
      document.getElementById("firstPart").style.display = "block";
      document.getElementById("secondPart").style.display = "none";
      document.querySelector('#registerBtn').setAttribute('disabled', 'disabled');
}

}
