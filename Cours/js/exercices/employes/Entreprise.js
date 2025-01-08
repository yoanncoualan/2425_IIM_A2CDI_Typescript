export class Entreprise {
    constructor(employes) {
        this.employes = [];
        this.employes = employes;
    }
    addEmploye(employe) {
        this.employes.push(employe);
    }
    getMasseSalariale() {
        let masseSalariale = 0;
        for (const employe of this.employes) {
            masseSalariale += employe.getSalaire();
        }
        return masseSalariale;
    }
}
