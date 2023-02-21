import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://hjclpcnnqenpzzixvsvh.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqY2xwY25ucWVucHp6aXh2c3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNTUyODgsImV4cCI6MTk4MzczMTI4OH0.sRlneLAbfoomXZQqS-Sn5lW1Z_3fBnpidg3b_1s9q_M";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}