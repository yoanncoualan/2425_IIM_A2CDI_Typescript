// Import du module à l'aide d'un chemin relatif
import { UserInterface } from "./interfaces/User";

namespace ExempleModule {
  // Utilisation du module 'UserInterface'
  const yoann: UserInterface = {
    firstname: "Yoann",
    lastname: "Coualan",
    birthdate: new Date("2000-06-22"),
    gender: "Male",
  };

  console.log(yoann);
}
