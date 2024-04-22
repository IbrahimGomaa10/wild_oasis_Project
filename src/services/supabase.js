import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lnopguqkexhgfladzgqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxub3BndXFrZXhoZ2ZsYWR6Z3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMzExMTQsImV4cCI6MjAyNDcwNzExNH0.jhV3OHxJg-vL1V6pVccFjW1o4swJRgIVuREhRwsuPQ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
