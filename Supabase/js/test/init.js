import "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"; // Import via CDN
// dotenv n'est plus accessible donc on met les accès en brut
const supabaseUrl = "https://kyxxhqsxaipvupwyzots.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5eHhocXN4YWlwdnVwd3l6b3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMjY4ODUsImV4cCI6MjA1MTkwMjg4NX0.CrRcyGeVRwvDg4uRnzYr4-fCXOHh2RCmfY_5EOjSRMw";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
export default supabaseClient; // Export de supabaseClient
