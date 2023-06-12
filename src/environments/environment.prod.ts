export const environment = {
  apiUrl: 'http://my-planning-backend.amaury-lapaque.io',
  apiUrlSuffix: '',
  production: true,
};

export function generateCompleteUrl(): string {
  return environment.apiUrl + environment.apiUrlSuffix;
}



