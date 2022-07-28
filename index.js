window.addEventListener('load', function() {
  function processForm(e) {
      window.open(`http://sparkprod1/sparkorderinterface/OrderQueue?startDate=${e.target.querySelector("#start").value}T00%3A00&endDate=${e.target.querySelector("#end").value}T23%3A59%3A59.9`);
  }

  var form = document.getElementById('my-form');
  if (form.attachEvent) {
      form.attachEvent("submit", processForm);
  } else {
      form.addEventListener("submit", processForm);
  }
  form.querySelector("#end").addEventListener("mousedown", noInput);
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  form.querySelector("#start").value = today

  
  
  function noInput(e){
    if (e.target.value == ""){
      e.target.value = e.target.parentElement.querySelector("#start").value
    }
  }
  // debugger
  
})



