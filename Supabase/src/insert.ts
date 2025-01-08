import supabase from "./init.js";
import user from "./login.js";
import { hashPassword } from "./hash.js";

const createUser = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  // Authentification
  const userLogged = await user;
  if (!userLogged) {
    return false;
  }

  const hashedPassword = await hashPassword(password);
  const { error } = await supabase.from("user").insert({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashedPassword,
  });

  // Si une erreur existe, on la renvoie
  if (error) {
    console.error(error);
    return error.message;
  }

  // Sinon, on renvoie Vrai
  return true;
};

const createdUser = createUser(
  "TEST",
  "TEST",
  "jane.test@example.com",
  "password"
);
