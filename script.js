
document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.querySelector(".input-data");
    const taskContainer = document.querySelector(".task-container");
    const addTask = document.querySelector(".add-task");

    addTask.addEventListener("click", () => {
        if (userInput.value == "") {
            alert("Please add a task");
        } else {

            const taskBox = document.createElement("div");
            taskBox.classList.add("task");

            taskContainer.appendChild(taskBox);

            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            taskBox.appendChild(checkBox);

            const paragraph = document.createElement("p");
            paragraph.innerHTML = userInput.value;
            taskBox.appendChild(paragraph);

            const dlt = document.createElement("Button");
            dlt.textContent = "Delete";
            dlt.classList.add("delete");
            taskBox.appendChild(dlt);

            dlt.addEventListener("click", () => {
                const p = dlt.parentElement;
                taskContainer.removeChild(p);
            })

            userInput.value = "";

            checkBox.addEventListener("change",()=>{
                if(checkBox.checked){
                    paragraph.classList.add("task-done");
                }else{
                    paragraph.classList.remove("task-done");
                }
            })
        }
    });
})