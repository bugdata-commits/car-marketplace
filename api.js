const SUPABASE_URL = 'https://uarwhzflhffwndebgmlu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcndoemZsaGZmd25kZWJnbWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMTk4ODgsImV4cCI6MjEwMjU5NTg4OH0.Y0SupNuU1v-LQAtO7JaJv33HD9_HtHLlSiyXnp37gv8';

async function search() {
  const q = document.getElementById('q').value.trim();
  const type = document.getElementById('type').value;
  const list = document.getElementById('results-list');
  list.innerHTML = '<p>Loading vehicles…</p>';
  try {
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/cars?search=eq.${encodeURIComponent(q)}`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    });
    const data = await resp.json();
    renderResults(data || []);
  } catch (e) {
    list.innerHTML = '<p>No vehicles available yet. Be the first to list!</p>';
  }
}

function renderResults(cars) {
  const list = document.getElementById('results-list');
  if (!cars.length) {
    list.innerHTML = '<p>No cars match your search. Try different keywords.</p>';
    return;
  }
  list.innerHTML = cars.map(c => `
    <div class="result-card">
      <h3>${c.title || 'Vehicle'}</h3>
      <p>${c.location || 'Location'}, • ${c.price || 'Price on request'}</p>
      ${c.image_url ? `<img src="${c.image_url}" alt="Car" style="width:100%;border-radius:6px;margin:1rem 0;">` : ''}
    </div>
  `).join('');
}

// Auto-search on load with defaults
window.addEventListener('DOMContentLoaded', () => {
  search();
});