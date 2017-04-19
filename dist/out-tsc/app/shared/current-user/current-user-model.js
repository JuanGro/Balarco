var CurrentUser = (function () {
    function CurrentUser(object) {
        this.username = object.username;
        this.token = object.token;
        this.roles = object.roles;
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
    return CurrentUser;
}());
export { CurrentUser };
//# sourceMappingURL=../../../../../src/app/shared/current-user/current-user-model.js.map