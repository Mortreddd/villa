const propertyResource = [];
const RESOURCE_URL = "http://localhost:8000/api/properties";
const CSRF_TOKEN = document.querySelector("#csrf-token").value;
// PATH: api/properties

console.log("Loading properties.js");
fetch(RESOURCE_URL, {
  method: "POST",
  credentials : "same-origin",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRFToken": "{{ csrf_token }}",
  },
})
  .then((response) => {
    response.json();
  })
  .then((data) => {
    properties = data;
    console.log(properties);
    propertyResource = new Array(...properties);
  })
  .catch( error => {
    throw new Error(error)
  });
