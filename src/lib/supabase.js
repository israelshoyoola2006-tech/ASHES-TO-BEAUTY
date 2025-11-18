import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kyvrmukeorvxezcsyria.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dnJtdWtlb3J2eGV6Y3N5cmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0NTU3MDQsImV4cCI6MjA3OTAzMTcwNH0.dAYQiFOAksPXVczfvnNiujW3gUZFNKfID4IKJyTcy60"
);