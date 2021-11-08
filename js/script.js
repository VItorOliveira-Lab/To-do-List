let inputTask = document.querySelector("#input-task");
let submitTask = document.querySelector("#submit-task");
let nameTask = document.querySelector("#name-task");
let containerTask = document.querySelector(".container-task");
let checkButton = document.querySelector(".buttons #button-check");
let deleteButton = document.querySelector(".buttons #button-delete");
let buttonClearAll = document.querySelector("#clear");

let listTasks = [];

const addTask = () => {
    listTasks.push({
        nameTask: inputTask.value,
        status: false
    })
    clearInput();
    showTask();
};


const showTask = () => {
    let newLi = "";
    listTasks.forEach((task, index) => {
        newLi +=`
            <li class="task-item ${ task.status == true ? "concluded" : ""}">

                <p id="name-task ${ task.status == true ? "concluded" : ""}">${task.nameTask}</p>

                <div class="buttons">
                    <button id="button-check" onclick="concludedTask(${index})"><i class="fas fa-check"></i></button>

                    <button id="button-delete" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></button>
                </div><!--Buttons-->
            </li>
        `
    })
    containerTask.innerHTML = newLi
}

const deleteTask = ( index ) => {
    listTasks.splice(index, 1);
    showTask();
}



const concludedTask = ( index ) => {
    listTasks[index].status = !listTasks[index].status;
    showTask();
}

const clearInput = () => {
    inputTask.value = "";
    inputTask.focus();
}

const clearList = () => {
    listTasks.splice(0)
    showTask();

    let inner = document.querySelector(".inner")
    inner.innerHTML = "Wiped out";
    setInterval(()=>{
        inner.innerHTML = "";
    }, 2000)
}


submitTask.addEventListener("click", addTask);
buttonClearAll.addEventListener("click", clearList);




