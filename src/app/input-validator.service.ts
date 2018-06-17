import { Injectable, NgModule } from '@angular/core';

@Injectable()

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})

export class InputValidatorService {

  valueErrorHandler = '';
  valuePassword = '';
  valueInvalidPassword = '';
  valueUsername = '';
  valueEmail = '';
  valueInvalidInput = '';
  password = '';
  confirmPassword = '';
  username = '';
  statusPassword = false;
  statusValidPassword = false;
  statusUsername = false;
  statusEmail = false;
  danger = '#d9534f';
  sucess = '#5cb85c';

  constructor() { }

  errorHandler(status) {
    if (status === 500) {
      document.getElementById('alert-invalid').style.display = 'block';
      this.valueErrorHandler = 'Error interno, tente novamente mais tarde';
    } else if (status === 400) {
      document.getElementById('alert-invalid').style.display = 'block';
      this.valueErrorHandler = 'Nome de usuário já existente';
    }
  }

  onKeyPassword(e: any) {
    this.password = e.target.value;
    if (!this.isValidPassword(this.password)) {
      this.valueInvalidPassword = 'Sua senha deve ter no mínimo 6 caracteres';
      document.getElementById('alert-invalid-password').style.display = 'block';
      this.statusValidPassword = false;
      this.borderColor('password', this.danger);
    } else {
      document.getElementById('alert-invalid-password').style.display = 'none';
      this.statusValidPassword = true;
      this.borderColor('password', this.sucess);
    }
  }

  onKeyConfirmPassword(e: any) {
    this.confirmPassword = e.target.value;
  }

  onKeyUsername(e: any) {
    let username = e.target.value;
    if (this.isUsernameValid(username)) {
      document.getElementById('alert-username').style.display = 'none';
      this.valueUsername = '';
      this.statusUsername = true;
      this.borderColor('username', this.sucess);
    } else {
      this.valueUsername = 'Nome de usuário inválido';
      document.getElementById('alert-username').style.display = 'block';
      this.statusUsername = false;
      this.borderColor('username', this.danger);
    } if (!this.isUsernameSizeValid(username)) {
      this.valueUsername = 'Nome de usuário deve ter entre 4 e 20 caracteres';
      document.getElementById('alert-username').style.display = 'block';
      this.statusUsername = false;
      this.borderColor('username', this.danger);
    }

  }

  onKeyEmail(e: any) {
    let email = e.target.value;
    if (this.isEmailValid(email)){
      document.getElementById('alert-email').style.display = 'none';
      this.valueEmail = '';
      this.statusEmail = true;
      this.borderColor('email', this.sucess);
    } else {
      document.getElementById('alert-email').style.display = 'block';
      this.valueEmail = 'Formato do E-mail está incorreto';
      this.statusEmail = false;
      this.borderColor('email', this.danger);
    } if (email.length < 4) {
      document.getElementById('alert-email').style.display = 'block';
      this.valueEmail = 'Formato do E-mail está incorreto';
      this.statusEmail = false;
      this.borderColor('email', this.danger);
    }
  }

  onKeyValidatorPassword(e: any) {
    if (this.isConfirmedPassword(this.confirmPassword, this.password)) {
      document.getElementById('alert-password').style.display = 'none';
      this.valuePassword = '';
      this.statusPassword = true;
      this.borderColor('confirm-password', this.sucess);
    } else {
      this.valuePassword = 'A confirmação de senha não corresponde';
      document.getElementById('alert-password').style.display = 'block';
      this.statusPassword = false;
      this.borderColor('confirm-password', this.danger);
    }
  }

  isUsernameValid(username) {
    const format = /^[a-zA-Z0-9]+$/;
    if (format.test(username)) {
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
    const EMAILRGX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (EMAILRGX.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  isConfirmedPassword(password, confPassword) {
    if (password === confPassword) {
      return true;
    }
    return false;
  }

  isValidPassword(password) {
    if (password.length > 5 && password.length < 50) {
      return true;
    }
    return false;
  }

  validatorEditUser() {
    // if (!this.statusPassword && !this.statusUsername && !this.statusEmail && !this.statusValidPassword) {
    if (!this.statusUsername && !this.statusEmail) {
      document.getElementById('alert-invalid-inputs').style.display = 'block';
      this.valueInvalidInput = 'Por favor, preencha os campos obrigatórios';
      // if (!this.statusPassword) {
      // this.borderColor('password', this.danger);
      // this.borderColor('confirm-password', this.danger);
      // } else {
      //   this.borderColor('password', this.sucess);
      //   this.borderColor('confirm-password', this.sucess);
      // }

      if (!this.statusUsername) {
        this.borderColor('username', this.danger);
      } else {
        this.borderColor('username', this.sucess);
      }

      if (!this.statusEmail) {
        this.borderColor('email', this.danger);
      } else {
        this.borderColor('email', this.sucess);
      }
    }
  }
  validatorRegisterUser() {
    if (this.statusPassword && this.statusUsername && this.statusEmail && this.statusValidPassword) {
      document.getElementById('firstPart').style.display = 'none';
      document.getElementById('secondPart').style.display = 'block';
      document.querySelector('#registerBtn').removeAttribute('disabled');
    } else {
      document.getElementById('alert-invalid-inputs').style.display = 'block';
      this.valueInvalidInput = 'Por favor, preencha os campos obrigatórios';
      if (!this.statusPassword) {
      this.borderColor('password', this.danger);
      this.borderColor('confirm-password', this.danger);
      } else {
        this.borderColor('password', this.sucess);
        this.borderColor('confirm-password', this.sucess);
      }

      if (!this.statusUsername) {
        this.borderColor('username', this.danger);
      } else {
        this.borderColor('username', this.sucess);
      }

      if (!this.statusEmail) {
        this.borderColor('email', this.danger);
      } else {
        this.borderColor('email', this.sucess);
      }
    }
 }

 borderColor(id, color) {
  document.getElementById(id).style.borderColor = color;
 }

 clickReturnButton () {
  document.getElementById('firstPart').style.display = 'block';
  document.getElementById('secondPart').style.display = 'none';
  document.querySelector('#registerBtn').setAttribute('disabled', 'disabled');
}


}
