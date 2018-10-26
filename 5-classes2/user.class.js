function User (fn,ln){

    this.firstName = fn;
    this.lastName = ln;
    this.hasAccess = false;
    this.isLoggedIn = false;

    this.LogIn = function(){this.hasAccess === true ? this.isLoggedIn = true : this.isLoggedIn = false};
    this.LogOut = function(){this.isLoggedIn = false;};
    this.ShowInfo = function(){return [firstName,lastName,hasAccess,isLoggedIn];}
}

module.exports = User;





