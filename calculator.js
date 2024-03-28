function calculateAge() {
  var birthdateInput = document.getElementById('birthdate').value;
  var birthdate = new Date(birthdateInput);
  var today = new Date();

  var age = today.getFullYear() - birthdate.getFullYear();
  var monthDiff = today.getMonth() - birthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  document.getElementById('result').innerHTML = "Your age is " + age + " years.";
}


