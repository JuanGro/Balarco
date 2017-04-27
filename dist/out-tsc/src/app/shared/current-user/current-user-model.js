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
    CurrentUser.prototype.getRolesString = function () {
        var rolesString = '';
        for (var i = 0; i < this.roles.length; i++) {
            if (i == this.roles.length - 1) {
                rolesString += this.roles[i];
            }
            else {
                rolesString += this.roles[i] + ', ';
            }
        }
        return rolesString;
    };
    return CurrentUser;
}());
export { CurrentUser };
//# sourceMappingURL=../../../../../../src/app/shared/current-user/current-user-model.js.map