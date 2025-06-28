fetch('https://5gyqx5hisb.execute-api.us-east-1.amazonaws.com/default/get_visitor_count')
    .then(response => {
        if (response.ok) {
            // do something
        }
        return response.json();
    })
  	.then(data => {
    document.getElementById("VisitorCounter").textContent = data["count"];
  })
