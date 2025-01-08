// Import de 'Gender' afin de pouvoir l'utiliser
import { Gender } from "../types/Gender";

export interface UserInterface {
  firstname: string;
  lastname: string;
  birthdate?: Date;
  gender: Gender;
}
