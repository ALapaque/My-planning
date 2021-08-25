export const environment = {
  apiUrl: 'http://amaury.must.be:32768',
  apiUrlSuffix: '/api',
  production: false,
};

export function generateCompleteUrl(): string {
  return environment.apiUrl + environment.apiUrlSuffix;
}



