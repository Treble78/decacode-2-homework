const User = require('./user.class');

function Admin(fn,ln) {
    User.apply(this,arguments);
    this.hasAccess = true;
};

module.exports = Admin;
