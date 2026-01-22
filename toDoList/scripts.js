let taskCount=0
function addTask(){
    let input=$(".task-input").val();
    $(".task-input").val("");
    if(input===""){
        alert("Enter a Task");
        return;
    }
    taskCount++;
    $("#todo-list").append(`<li class="task-class task${taskCount}">
        <span class=task-span>
        ${input}
        </span>
        <div>
        <button onclick="completeTask('task${taskCount}')" class="completeBtn"> Complete</button>
        
        <button onclick="removeTask('task${taskCount}')" class='removeBtn'> Remove</button>
        </div>
        </li>

        `);
};
function removeTask(taskNum){
    $("."+taskNum).remove();
}
function completeTask(taskNum){
    $("."+taskNum+">div").remove()
    $("."+taskNum).css({"background-color":"#5CE65C",
        "border-radius":"8px",
        "padding":"10px",
        "margin-bottom":"5px"
    })
    
}