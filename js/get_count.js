fetch('https://5gyqx5hisb.execute-api.us-east-1.amazonaws.com')
    .then(response => {
        if (response.ok) {
            // do something
        }
        return response.json();
    })
  	.then(data => {
    document.getElementById("VisitorCounter").textContent = data["count"];
  })
