namespace ExempleType {
  type Gender = "male" | "female" | "Non-binary";
  type User = {
    firstname: string;
    lastname: string;
  };

  interface UserWithGender {
    user: User;
    gender: Gender;
  }

  const yoann2: UserWithGender = {
    user: {
      firstname: "Yoann",
      lastname: "Coualan",
    },
    gender: "male",
  };

  console.log(
    `${yoann2.user.firstname} ${yoann2.user.lastname} : ${yoann2.gender}`
  );
}
