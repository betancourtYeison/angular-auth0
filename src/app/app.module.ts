import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTING } from "./app.routes";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { PricesComponent } from "./components/prices/prices.component";
import { SecuredComponent } from "./components/secured/secured.component";

import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricesComponent,
    SecuredComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
