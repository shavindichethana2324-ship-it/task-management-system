function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost/task-frontend/task-api/login.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: username,
            password: password
        })

    })

    .then(response => response.json())

    .then(data => {

        if(data.token){

            localStorage.setItem("token", data.token);

            alert("Login Successful");

            window.location.href = "home.html";

        }
        else{

            alert("Invalid Username or Password");

        }

    })

    .catch(error => {

        console.log(error);

        alert("Error Occurred");

    });

}