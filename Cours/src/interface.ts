namespace ExempleInterface {
  // Création de l'interface
  interface User {
    firstname: string;
    lastname: string;
    birthdate?: Date;
  }

  // Création d'un objet avec l'interface
  const yoann: User = {
    firstname: "Yoann",
    lastname: "Coualan",
    birthdate: new Date("2000-06-22"),
  };

  console.log(`${yoann.firstname} ${yoann.lastname}`);

  const john: User = {
    firstname: "John",
    lastname: "Doe",
  };
}
