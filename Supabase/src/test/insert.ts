import supabaseClient from "./init.js"; // Import de supabaseClient
import user from "./login.js";

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

  // Changement de supabase pour supabaseClient
  const { error } = await supabaseClient.from("user").insert({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password, // pas possible d'utiliser bcrypt via import
  });

  // Si une erreur existe, on la renvoie
  if (error) {
    console.error(error);
    return error.message;
  }

  // Sinon, on renvoie Vrai
  return true;
};

createUser("TEST", "TEST", "jane.test@example.com", "password");
