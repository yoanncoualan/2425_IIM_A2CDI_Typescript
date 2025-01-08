import supabase from "./init.js";
import user from "./login.js";
import { hashPassword } from "./hash.js";

const updateUser = async () => {
  const userLogged = await user;
  if (!userLogged) {
    return false;
  }

  const pwd = await hashPassword("plainPassword");
  const { data, error } = await supabase
    .from("user")
    .update({
      password: pwd,
    })
    .eq("id", "56f7027c-6f6e-4cbf-b521-85535a44def7")
    .select();

  if (error) {
    console.error(error);
    return false;
  }

  console.log(data);
  return true;
};

const userUpdated = updateUser();
