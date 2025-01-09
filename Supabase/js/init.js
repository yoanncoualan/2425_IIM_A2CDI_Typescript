import * as dotenv from "dotenv";
dotenv.config(); // Charge le fichier .env
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL || "";
console.log(supabaseUrl);
const supabaseKey = process.env.SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
