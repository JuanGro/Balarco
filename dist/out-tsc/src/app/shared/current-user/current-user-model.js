import { Role } from '../auth/role';
var CurrentUser = (function () {
    function CurrentUser(object) {
        this.username = object.username;
        this.token = object.token;
        this.roles = object.roles;
        this.id = object.id;
        this.firstName = object.firstName;
        this.lastName = object.lastName;
    }
    CurrentUser.prototype.hasRole = function (roles) {
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            if (this.roles.indexOf(role) !== -1) {
                return true;
            }
        }
        return false;
    };
    CurrentUser.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    CurrentUser.prototype.getRoles = function () {
        var rolesStrings = [];
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var role = _a[_i];
            rolesStrings.push(this.getRoleName(role));
        }
        return rolesStrings;
    };
    CurrentUser.prototype.getRoleName = function (role) {
        switch (role) {
            case Role.DIRECTOR_CUENTAS:
                return 'Director de cuentas';
            case Role.EJECUTIVO_SR:
                return 'Ejecutivo SR';
            case Role.EJECUTIVO_JR:
                return 'Ejecutivo JR';
            case Role.ADMINISTRACION:
                return 'Administración';
            case Role.DIRECTOR_ARTE:
                return 'Director de arte';
            case Role.DISENADOR_SR:
                return 'Diseñador SR';
            case Role.DISENADOR_JR:
                return 'Diseñador JR';
            case Role.SUPER_USUARIO:
                return 'Super usuario';
        }
    };
    return CurrentUser;
}());
export { CurrentUser };
//# sourceMappingURL=../../../../../../src/app/shared/current-user/current-user-model.js.map