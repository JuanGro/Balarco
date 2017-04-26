// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  'API_URL': 'http://127.0.0.1:8000/api/',
  'WS_URL': 'ws://127.0.0.1:8000/',
  'CLIENTS_URL': 'clients/clients/',
  'CONTACTS_URL': 'clients/contacts/',
  'IGUALAS_URL': 'works/igualas/',
  'USERS_URL': 'users/users/',
  'GROUPS_URL': 'users/groups/',
  'ART_TYPES_URL': 'works/art_types/',
  'WORK_TYPES_URL': 'works/work_types/',
  'WORKS_URL': 'works/works/',
  'STATUS_URL': 'works/status/',
  'RECOVER_PASSWORD_URL': 'users/auth/password/reset/',
  'USER_LIST_NOTIFICATIONS_URL': 'users/stream/',
  'CLIENT_LIST_NOTIFICATIONS_URL': 'clients/stream/',
  'CONTACT_LIST_NOTIFICATIONS_URL': 'contacts/stream/',
  'IGUALAS_LIST_NOTIFICATIONS_URL': 'igualas/stream/',
  'WORK_LIST_NOTIFICATIONS_URL': 'works/stream/',
};
