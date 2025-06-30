function updateClock() {
    const now = new Date();
  
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  
    // Update date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
  }
  
  // Toggle Theme
  document.getElementById('toggleBtn').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');
  
    const btn = document.getElementById('toggleBtn');
    if (body.classList.contains('dark')) {
      btn.textContent = '☀️ Light Mode';
    } else {
      btn.textContent = '🌙 Dark Mode';
    }
  });
  
  setInterval(updateClock, 1000);
  updateClock();
  