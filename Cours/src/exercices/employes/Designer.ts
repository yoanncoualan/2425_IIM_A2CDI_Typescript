import { EmployeInterface } from "./EmployeInterface";

export class Designer implements EmployeInterface {
  travailler(): string {
    return "Je dessine";
  }

  getSalaire(): number {
    return 1500;
  }
}
