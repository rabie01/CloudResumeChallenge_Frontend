fetch('https://api.myresume.rabietech.dpdns.org')
    .then(response => {
        if (response.ok) {
            // do something
        }
        return response.json();
    })
  	.then(data => {
    document.getElementById("VisitorCounter").textContent = data["count"];
  })
