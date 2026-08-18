const SUPABASE_URL = 'https://uarwhzflhffwndebgmlu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcndoemZsaGZmd25kZWJnbWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMTk4ODgsImV4cCI6MjEwMjU5NTg4OH0.Y0SupNuU1v-LQAtO7JaJv33HD9_HtHLlSiyXnp37gv8';

async function search() {
  const q = document.getElementById('q').value;
  const type = document.getElementById('type').value;
  // TODO: query Supabase cars table
  document.getElementById('results').innerHTML = '<p>No results yet. Seed data coming soon!</p>';
}