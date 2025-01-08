import supabase from "./init.js";
import user from "./login.js";
const deleteUser = async () => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const response = await supabase
        .from("user")
        .delete()
        .eq("id", "02b1bf16-805e-4b2f-a4b7-9f29abec15db");
    return response;
};
const userDeleted = deleteUser();
