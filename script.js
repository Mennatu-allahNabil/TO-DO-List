
window.addEventListener('load',()=>{
    const form=document.querySelector("#add-new-task-form");
    const input=document.querySelector("#new-task");
    const submit=document.querySelector("#add-task");
    const tasksList=document.querySelector("#tasks");
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
        if(task){
            const tasks=document.getElementById("tasks");
            const taskElement=document.createElement("div");
            taskElement.classList.add("task");
            const taskContent=document.createElement("div");
            taskContent.classList.add("task-content");
            taskElement.appendChild(taskContent);
            const taskActions=document.createElement("div");
            taskActions.classList.add("task-actions");
            taskElement.appendChild(taskActions);
            const taskInput=document.createElement("input");
            taskInput.type="text";
            taskInput.value=task;
            taskInput.setAttribute("readonly","readonly");
            taskContent.appendChild(taskInput);
            const edit=document.createElement("button");
            edit.classList.add("edit");
            edit.innerText="Edit";
            taskActions.appendChild(edit);
            const del=document.createElement("button");
            del.classList.add("del");
            del.innerText="Delete";
            taskActions.appendChild(del);
            tasksList.appendChild(taskElement);
            input.value="";
            edit.addEventListener('click',()=>{
            if(edit.innerText=="EDIT"){
                taskInput.removeAttribute("readonly");
                taskInput.focus();
                edit.innerText="Save";
            }
            else{
                taskInput.setAttribute("readonly","readonly");                taskInput.focus();
                edit.innerText="Edit";
            }
            })
            del.addEventListener('click',()=>{
                // tasksList.removeChild(taskElement);
               taskElement.remove();
            });
        }
        
    });
})

