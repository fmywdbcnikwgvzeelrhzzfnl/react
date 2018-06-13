import '../css/user.css';

export default class User {
    constructor(containerName, surname, firstname, lastname) {
        this.$container = $(containerName);
        this.surname = surname;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    aboutDeveloper() {
        let about = `Developer name: ${this.surname} ${this.firstname} ${this.lastname}`;
        $(this.$container).text(about);
        console.log(`Developer name: ${this.surname} ${this.firstname} ${this.lastname}`);

    }
}