let tasks = [];

function addTask() {
    let newTask = document.getElementById("newTask").value;
    let time = document.getElementById("time").value;

    if (newTask === "") {
        alert("Enter the task!");
        return;
    }
    tasks.push({ text: newTask, time: time });
    document.getElementById("newTask").value = "";
    document.getElementById("time").value = "";

    showTasks();
}

function showTasks() {
    document.getElementById("add").style.display = "none";
    document.getElementById("manage").style.display = "block";

    let list = document.getElementById("tasks");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        li.innerHTML = tasks[i].text + " - " + tasks[i].time;
        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.onclick = function () {
            deleteTask(i);
        };
        li.appendChild(btn);
        list.appendChild(li);
    }
}

function deleteTask(index) {
    for (let i = index; i < tasks.length - 1; i++) {
        tasks[i] = tasks[i + 1];
    }
    tasks.pop(); 
    showTasks();
}

function goBack() {
    document.getElementById("add").style.display = "block";
    document.getElementById("manage").style.display = "none";
}