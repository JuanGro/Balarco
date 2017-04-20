import { CurrentUser } from './current-user-model';
import { Role } from '../auth/role';

describe('Client object model tests.', () => {

  it('should build a CurrentUser object', () => {
    let testCurrentUser = new CurrentUser({ username: 'test', token: 'test', roles: [ Role.DIRECTOR_CUENTAS ]});
    expect(testCurrentUser.username).toEqual('test');
    expect(testCurrentUser.token).toEqual('test');
    expect(testCurrentUser.roles).toEqual([ Role.DIRECTOR_CUENTAS ]);
  });
});

describe('hasRole method tests.', () => {

  let testCurrentUser: CurrentUser;

  beforeEach(() => {
    testCurrentUser = new CurrentUser({ username: 'test', token: 'test', roles: [ Role.DIRECTOR_CUENTAS ]});
  });

  it('should return false if user has not the role specified in params', () => {
    expect(testCurrentUser.hasRole([ Role.EJECUTIVO_SR ])).toBe(false);
  });

  it('should return true if user has the role specified in params', () => {
    expect(testCurrentUser.hasRole([ Role.DIRECTOR_CUENTAS ])).toBe(true);
  });

  it('should return true if user has at least one role from the ones specified in params', () => {
    expect(testCurrentUser.hasRole([ Role.EJECUTIVO_SR, Role.DIRECTOR_CUENTAS ])).toBe(true);
  });
});
