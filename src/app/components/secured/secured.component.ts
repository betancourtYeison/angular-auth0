import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-secured",
  templateUrl: "./secured.component.html",
  styles: []
})
export class SecuredComponent implements OnInit {
  profile: any;

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    if (this._authService.userProfile) {
      this.profile = this._authService.userProfile;
      console.log("profile", this.profile);
    } else {
      this._authService.getProfile((err, profile) => {
        this.profile = profile;
        console.log("profile", this.profile);
      });
    }
  }
}
