namespace Exemple_in {
  interface User {
    firstname: string;
    lastname: string;
    birthdate?: Date;
  }

  const yoann: User = {
    firstname: "Yoann",
    lastname: "Coualan",
    birthdate: new Date("2000-06-22"),
  };

  console.log("id in yoann ?", "id" in yoann); // false
  console.log("firstname in yoann ?", "firstname" in yoann); // true
}
