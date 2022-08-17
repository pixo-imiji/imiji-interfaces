module.exports = class {
    constructor({id, name, email, avatarId, firstname, lastname, packet, locale, albumRoles, toProfile, totalUsages}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatarId = avatarId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.packet = packet;
        this.locale = locale;
        this.albumRoles = albumRoles;
        this.toProfile = toProfile;
        this.totalUsages = totalUsages;
    }
}