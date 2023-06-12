export const environment = {
  apiUrl: 'https://my-planning-backend.amaury-lapaque.io',
  apiUrlSuffix: '/api',
  production: true,
};

export function generateCompleteUrl(): string {
  return environment.apiUrl + environment.apiUrlSuffix;
}



