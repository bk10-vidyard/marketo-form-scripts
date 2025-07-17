
// Marketo form injection script for Vidyard Hub

(function () {
  // 1. Create a container for the form
  var formContainer = document.createElement("div");
  formContainer.id = "marketo-form-wrapper";
  formContainer.innerHTML = '<form id="mktoForm_6778"></form>';
  document.body.prepend(formContainer);

  // 2. Load Marketo Forms2 library dynamically
  var script = document.createElement("script");
  script.src = "//awesome.vidyard.com/js/forms2/js/forms2.min.js";
  script.onload = function () {
    MktoForms2.loadForm("//awesome.vidyard.com", "273-EQL-130", 6778);
  };
  document.head.appendChild(script);
})();
