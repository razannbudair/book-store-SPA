document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('successMsg').style.display = 'block';
  this.reset();
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const pass = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPass').value;
  if (pass !== confirm) {
    alert('Passwords do not match!');
    return;
  }
  document.getElementById('signupMsg').style.display = 'block';
  this.reset();
});
