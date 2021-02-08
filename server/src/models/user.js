
class User
{
    name;
    email;
    password;
    email_verified_at;
    created_at;
    updated_at;

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.created_at = new Date();
    }

}

module.exports = User;