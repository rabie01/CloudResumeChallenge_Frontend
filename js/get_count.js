fetch('https://aegjbsexha.execute-api.us-east-1.amazonaws.com/default/VisitorCounter')
    .then(response => {
        if (response.ok) {
            // do something
        }
        return response.json();
    })
  	.then(data => {
    document.getElementById("VisitorCounter").textContent = data["visitorcount"];
  })
