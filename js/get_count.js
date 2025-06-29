const apiUrl = "__API_URL__";
fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            // do something
        }
        return response.json();
    })
  	.then(data => {
    document.getElementById("VisitorCounter").textContent = data["count"];
  })
