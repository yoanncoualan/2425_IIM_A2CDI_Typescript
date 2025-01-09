import supabaseClient from "./init.js";

const signIn = async () => {
  // Changement de supabase pour supabaseClient
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: "yoann.coualan@gmail.com",
    password: "IIMA2CDI@25",
  });

  if (error) {
    console.error(error);
    return false;
  }

  return data;
};

const user = signIn();

export default user;
