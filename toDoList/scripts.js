let arr=JSON.parse(localStorage.getItem("arr"))||[];
let taskCount = arr.length ? Math.max(...arr.map(t => t.taskNum)) : 0;

for(val of arr){
    $("#todo-list").append(`<li class="task-class task${val.taskNum}">
    <span class=task-span${val.taskNum}>
    ${val.task}
    </span>
    <div>
    <button onclick="completeTask('${val.taskNum}')" class="completeBtn${val.taskNum} completeBtn"> Complete</button>
    
    <button onclick="removeTask('${val.taskNum}')" class='removeBtn'> Remove</button>
    <button onclick="editTask('${val.taskNum}')" class='editBtn editBtn${val.taskNum}'> edit</button>
    
    </div>
    </li>
    `);
    taskCount++;
}
function addTask(){
    let input=$(".task-input").val();
    $(".task-input").val("");
    if(input===""){
        alert("Enter a Task");
        return;
    }
    taskCount+=1;
    $("#todo-list").append(`<li class="task-class task${taskCount}">
        <span class=task-span${taskCount}>
        ${input}
        </span>
        <div>
        <button onclick="completeTask('${taskCount}')" class="completeBtn${taskCount} completeBtn"> Complete</button>
        
        <button onclick="removeTask('${taskCount}')" class='removeBtn'> Remove</button>
        <button onclick="editTask('${taskCount}')" class='editBtn editBtn${taskCount}'> edit</button>
        
        </div>
        </li>
        `);
        let obj={taskNum:taskCount, task:input,created_at:Date.now()};
    arr.push(obj);
    localStorage.setItem("arr",JSON.stringify(arr));
    
};
function editTask(taskNum){
    let task=$(`.task-span${taskNum}`).html()
    $(`.task${taskNum}`).remove()
    console.log(task)
    $(".task-input").val(task.trim())
}
function removeTask(taskNum){
    arr=arr.filter(val=>val.taskNum!=taskNum)
    console.log(arr,taskNum)
    localStorage.setItem("arr",JSON.stringify(arr))
    $(".task"+taskNum).remove();
}
function completeTask(taskNum){
    $(".editBtn"+taskNum).remove()
    $(".completeBtn"+taskNum).remove()
    $(".task"+taskNum).css({"background-color":"#5CE65C",
        "border-radius":"8px",
        "padding":"10px",
        "margin-bottom":"5px"
    })
    
}