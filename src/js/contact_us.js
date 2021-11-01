// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function localData(){
  let name = document.getElementById("fullname").value;
  let email = document.getElementById("emailAddress").value;
  let phone = document.getElementById("phoneNumber").value;
  let nationality = document.getElementById("nationality").value;
  let message = document.getElementById("message").value;

  localStorage.setItem("nameValue", name);
  localStorage.setItem("emailValue", email);
  localStorage.setItem("phoneNumValue", phone);
  localStorage.setItem("nationalityValue", nationality);
  localStorage.setItem("messageValue", message);
  //console.log(document.getElementById("fullname").value);
}