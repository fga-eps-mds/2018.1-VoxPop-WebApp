import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router:Router) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var confPassword = e.target.elements[2].value;
    var email = e.target.elements[3].value;
    console.log(username, password, email);

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
