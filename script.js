document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    statusEl.className = 'status-message';

    // Simple client‑side validation
    const [name, email, subject, message] = [
      form.name.value.trim(),
      form.email.value.trim(),
      form.subject.value.trim(),
      form.message.value.trim()
    ];

    if (!name || !email || !subject || !message) {
      statusEl.textContent = 'Please fill all fields.';
      statusEl.classList.add('status-error');
      return;
    }

    // Simulate API call (replace with real endpoint)
    try {
      await new Promise(res => setTimeout(res, 1500)); // fake network

      statusEl.textContent = 'Thanks! We’ll get back to you soon.';
      statusEl.classList.add('status-success');

      form.reset();
    } catch (err) {
      statusEl.textContent = 'Oops! Something went wrong.';
      statusEl.classList.add('status-error');
    }
  });
});
