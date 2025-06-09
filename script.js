// Pre-fill date with today
document.getElementById('date').value = new Date().toISOString().split('T')[0];

// Load and remember name
const nameInput = document.getElementById('name');
nameInput.value = localStorage.getItem('defaultName') || '';
nameInput.addEventListener('change', () => {
  localStorage.setItem('defaultName', nameInput.value);
});

document.getElementById('walkForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const date = document.getElementById('date').value;
  const kms = parseFloat(document.getElementById('kms').value);

  if (!name || isNaN(kms)) return alert("Fill everything correctly!");

  const entry = { date, kms };
  let data = JSON.parse(localStorage.getItem('walkData') || '{}');

  if (!data[name]) data[name] = [];
  data[name].push(entry);

  localStorage.setItem('walkData', JSON.stringify(data));
  alert('Saved!');
});
