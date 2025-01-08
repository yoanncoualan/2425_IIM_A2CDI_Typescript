import supabase from "./../init.js";
import user from "./../login.js";
const getUser = async (id) => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const { data, error } = await supabase
        .from("user")
        .select("id")
        .eq("id", id)
        .limit(1);
    if (error) {
        console.error(error);
        return false;
    }
    return data;
};
const insertComment = async (userId, comment) => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const dbUser = await getUser(userId);
    if (!dbUser || dbUser.length === 0) {
        return false;
    }
    const { error } = await supabase.from("comments").insert({
        user: dbUser[0].id,
        comment: comment,
    });
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
const commentInserted = insertComment("37380981-6c55-45b4-bd5f-458b30305623", "Hello World");
