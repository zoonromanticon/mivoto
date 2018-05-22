// auth0-variables exposes a configuration object for the authentication process.
// By uncommenting a given callbackUrl key, you can for in a development flow (localhost)
// or configure it for deploy on surge.
// Take notice that these URLs were specified on the auth0 dashboard, on the project's settings
// and otherwise wouldn't work 

export const AUTH_CONFIG = {
  domain: 'mivoto.auth0.com',
  clientId: 'unOVtAZa2PGW6ZWxfUa11PSl14wdmfUv',
  callbackUrl: 'http://localhost:3000/callback',
  // callbackUrl: 'https://mivoto.surge.sh/callback'
  // callbackUrl: 'https://mivoto.io/'
}