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
  
  
})



