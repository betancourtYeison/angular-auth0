interface AuthConfig {
  clientID: string;
  domain: string;
  redirectUri: string;
  audience: string;
  scope: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: "5uATNN34PXL0I5tfSrMsR0WvNSebsmOj",
  domain: "betancourtyeison.auth0.com",
  redirectUri: "http://localhost:4200/callback",
  audience: "https://betancourtyeison.auth0.com/userinfo",
  scope: "openid profile"
};
