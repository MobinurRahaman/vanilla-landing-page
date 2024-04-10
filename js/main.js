document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const formValues = Object.fromEntries(formData.entries());
  console.log("Form Data:", formValues);
});
