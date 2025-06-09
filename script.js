document.getElementById('walkForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const kms = parseFloat(document.getElementById('kms').value);

  const entry = { date, kms };
  let data = JSON.parse(localStorage.getItem('walkData') || '{}');

  if (!data[name]) data[name] = [];
  data[name].push(entry);

  localStorage.setItem('walkData', JSON.stringify(data));
  alert('Data saved!');
});
