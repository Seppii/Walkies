const ENDPOINT = "PASTE_YOUR_WEB_APP_URL_HERE";

document.getElementById('date').value = new Date().toISOString().split('T')[0];
const nameInput = document.getElementById('name');
nameInput.value = localStorage.getItem('defaultName') || '';
nameInput.addEventListener('change', () => {
  localStorage.setItem('defaultName', nameInput.value);
});

document.getElementById('walkForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const date = document.getElementById('date').value;
  const kms = parseFloat(document.getElementById('kms').value);

  if (!name || isNaN(kms)) return alert("Fill all fields.");

  const res = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ name, date, kms }),
    headers: { "Content-Type": "application/json" }
  });

  if (res.ok) {
    alert("Saved!");
  } else {
    alert("Failed to save.");
  }
});
