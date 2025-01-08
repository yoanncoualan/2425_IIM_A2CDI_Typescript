export class User {
  firstname: string;
  lastname: string;
  birthdate?: Date;

  constructor(fname: string, lname: string, bdate?: Date) {
    this.firstname = fname;
    this.lastname = lname;
    if (bdate) {
      this.birthdate = bdate;
    }
  }

  getAge(): string | number {
    if (!this.birthdate) {
      return "?";
    }
    const oneDay = 24 * 60 * 60 * 1000; // heures * minutes * secondes * millisecondes
    const now = new Date();
    const diff = now.getTime() - this.birthdate.getTime();
    const ageInDays = diff / oneDay;
    return Math.round(ageInDays / 365);
  }

  get(): string {
    const age = this.getAge();
    return `${this.firstname} ${this.lastname} à ${age} ans`;
  }
}
