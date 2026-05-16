function register() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost/task-frontend/task-api/register.php", {

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

        if(data.message || data.status){

            alert("Registration Successful");

            window.location.href = "login.html";

        }
        else{

            alert("Registration Failed");

        }

    })

    .catch(error => {

        console.log(error);

        alert("Error Occurred");

    });

}