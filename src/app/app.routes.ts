import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { PricesComponent } from "./components/prices/prices.component";
import { SecuredComponent } from "./components/secured/secured.component";
import { AuthGuardService } from "./services/auth-guard.service";

const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "prices", component: PricesComponent },
  {
    path: "secured",
    component: SecuredComponent,
    canActivate: [AuthGuardService]
  },
  { path: "**", component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
