let token = localStorage.getItem("token");

if(!token){

    window.location.href = "login.html";

}



function addTask() {

    const task = document.getElementById("taskInput").value;

    fetch("http://localhost/task-frontend/task-api/add_task.php", {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            "Authorization": token

        },

        body: JSON.stringify({
            task: task
        })

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message || data.status);

        document.getElementById("taskInput").value = "";

        getTasks();

    })

    .catch(error => {

        console.log(error);

        alert("Error Occurred");

    });

}



function getTasks() {

    fetch("http://localhost/task-frontend/task-api/get_task.php", {

        method: "GET",

        headers: {

            "Authorization": token

        }

    })

    .then(response => response.json())

    .then(data => {

        let output = "";

        data.forEach(task => {

            output += `
            
            <li>
                ${task.task}
            </li>
            
            `;

        });

        document.getElementById("taskList").innerHTML = output;

    })

    .catch(error => {

        console.log(error);

        alert("Error Loading Tasks");

    });

}



function logout() {

    fetch("http://localhost/task-frontend/task-api/logout.php", {

        method: "POST",

        headers: {

            "Authorization": token

        }

    })

    .then(response => response.json())

    .then(data => {

        localStorage.removeItem("token");

        alert("Logged Out Successfully");

        window.location.href = "login.html";

    })

    .catch(error => {

        console.log(error);

        alert("Logout Failed");

    });

}



getTasks();