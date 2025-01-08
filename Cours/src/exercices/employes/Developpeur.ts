import { EmployeInterface } from "./EmployeInterface";

export class Developpeur implements EmployeInterface {
  travailler(): string {
    return "Je code";
  }

  getSalaire(): number {
    return 2000;
  }
}
