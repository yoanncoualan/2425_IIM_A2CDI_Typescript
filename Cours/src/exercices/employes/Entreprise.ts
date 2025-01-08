import { EmployeInterface } from "./EmployeInterface";

export class Entreprise {
  employes: EmployeInterface[] = [];

  constructor(employes: EmployeInterface[]) {
    this.employes = employes;
  }

  addEmploye(employe: EmployeInterface) {
    this.employes.push(employe);
  }

  getMasseSalariale(): number {
    let masseSalariale = 0;
    for (const employe of this.employes) {
      masseSalariale += employe.getSalaire();
    }
    return masseSalariale;
  }
}
