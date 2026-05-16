let token = "";

function register() {

    fetch("http://localhost/task-api/register.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username: document.getElementById("regUsername").value,

            password: document.getElementById("regPassword").value

        })

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message || data.status);

    });

}



function login() {

    fetch("http://localhost/task-api/login.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username: document.getElementById("loginUsername").value,

            password: document.getElementById("loginPassword").value

        })

    })

    .then(response => response.json())

    .then(data => {

        token = data.token;

        alert("Login Successful");

    });

}



function addTask() {

    fetch("http://localhost/task-api/add_task.php", {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            "Authorization": token

        },

        body: JSON.stringify({

            task: document.getElementById("taskInput").value

        })

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message || data.status);

    });

}



function getTasks() {

    fetch("http://localhost/task-api/get_task.php", {

        method: "GET",

        headers: {

            "Authorization": token

        }

    })

    .then(response => response.json())

    .then(data => {

        let output = "";

        data.forEach(task => {

            output += `<li>${task.task}</li>`;

        });

        document.getElementById("taskList").innerHTML = output;

    });

}



function logout() {

    fetch("http://localhost/task-api/logout.php", {

        method: "POST",

        headers: {

            "Authorization": token

        }

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

    });

}