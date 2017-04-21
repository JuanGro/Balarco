// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  'API_URL': 'http://127.0.0.1:8000/api/',
  'HOME_URL': 'designer/owned-designs-list',
  'CLIENTS_URL': 'clients/clients/',
  'CONTACTS_URL': 'clients/contacts/',
  'IGUALAS_URL': 'works/igualas/',
  'USERS_URL': 'users/users/',
  'GROUPS_URL': 'users/groups/',
  'ART_TYPES_URL': 'works/art_types/',
  'WORK_TYPES_URL': 'works/work_types/',
  'WORKS_URL': 'works/works/',
  'STATUS_URL': 'works/status/',
  'RECOVER_PASSWORD_URL': 'users/auth/password/reset/'
};
