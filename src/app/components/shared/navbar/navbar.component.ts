import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor(public _authService: AuthService) {
    this._authService.handleAuthentication();
  }

  ngOnInit() {
    console.log("ngOnInit");
    // if (this._authService.isAuthenticated()) {
    //   console.log("if");
    //   this._authService.renewTokens();
    // }
  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
