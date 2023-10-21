export const oktaConfig = {

    clientId: '0oa9u0ejhbnLw6zuz5d7',
    issuer: 'https://dev-63388380.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}