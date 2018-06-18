import { Component, OnInit } from '@angular/core';
import { RequestsService } from './requests.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

declare var FB: any;
declare var logout: any;
declare global {
    interface Window { fbAsyncInit: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VoxPop';

  constructor(
    private cookieService: CookieService,
    private requester: RequestsService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '650913118581699',
        xfbml      : true,
        version    : 'v3.0'
      });
      FB.AppEvents.logPageView();
      FB.Event.subscribe('auth.statusChange', auth_status_change_callback);
      $(document).trigger('FBLoaded');
      // $(document).trigger('fbload');
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/pt_BR/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

    var auth_status_change_callback = function(response) {
      // console.log('auth_status_change_callback');
      FB.getLoginStatus(function(response) {
        This.loginFacebook(This, response);
      });
    }

    var This = this;
    $(document).on(
      'FBLoaded',
      function(event) {
        FB.getLoginStatus(function(response) {
          This.loginFacebook(This, response);
        });
      }
    );
  }

  getActualUserHandler(this_context, accessToken: string) {
    this_context.requester.getActualUser(accessToken).subscribe( response => {
      var res = response['body'];
      console.log(res);
      this_context.cookieService.set('userID', res['id']);
      this_context.cookieService.set('userUsername', res['username']);
      this_context.cookieService.set('userFirstName', res['first_name']);
      this_context.cookieService.set('userLastName', res['last_name']);
    });
  }

  convertTokenHandler(this_context, request, accessToken) {
    this_context.requester.convertToken(accessToken).subscribe(response => {
      this_context.results = response['body'];
      this_context.cookieService.set('bearer_token', this_context.results['access_token']);
      this_context.getActualUserHandler(this_context, this_context.results['access_token']);
      setTimeout(function(){window.location.replace('/')}, 500);
      // this.router.navigate(['']);
    });
  }

  loginFacebook(This, response) {
    let req: any;

    if(response.status == "connected") {
      var bearer_token = This.cookieService.get('bearer_token');
      if(bearer_token == '') {
        var accessToken = response.authResponse.accessToken;
        req = This.requester.convertToken(accessToken);
        This.convertTokenHandler(This, req, accessToken);
      }
    }
  }

  logout(cookieService) {
    cookieService.set('bearer_token', '');
    cookieService.set('basic_token', '');
    cookieService.set('userID', '');
    cookieService.set('userUsername', '');
    cookieService.set('userFirstName', '');
    cookieService.set('userLastName', '');
    FB.getLoginStatus(function(response) {
      if(response.status == "connected") {
        console.log('logout');
        FB.logout();
      }
    });
  }

}
