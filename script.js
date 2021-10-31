// setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".task-content");
let taskCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

//Focus on Input Field
window.onload = function () {
    theInput.focus();
};

//Adding the Task
theAddButton.onclick = function () {
    // if input is empty
    if (theInput.value === '') {

        console.log("no value");

    }else {
        let noTasksMsg = document.querySelector(".no-task-message");

        //Check if Span with no tasks Messages is exist

        if (document.body.contains(document.querySelector(".no-task-message"))) {
             // Remove no Tasks
        noTasksMsg.remove();
        
        }
       
        //Creat mainspan Element
        let mainSpan = document.createElement("span");
        
        //Creat delete button
        let deleteElement = document.createElement("span");
        
        //Creat text to mainspan
        let text = document.createTextNode(theInput.value);
        
        //Creat text to Delete Button
        let deleteText = document.createTextNode("Delete");

        //Add Text to mainspan
        mainSpan.appendChild(text);
        
        // Add class css To mainSpan
        mainSpan.className='task-box';

        //Add Text to delete Button
        deleteElement.appendChild(deleteText);

        //Add class css to Delete Button
        deleteElement.className='delete';

        //Add Delete Button to mainSpan
        mainSpan.appendChild(deleteElement);

        //Add the Task to the Container
        tasksContainer.appendChild(mainSpan);

        //Empty the input
        theInput.value = '';

        // CalculateTasks
        calculateTasks();
    }
};

document.addEventListener('click', function(e){
    // Delete Tasks
    if(e.target.className == 'delete') {

        // remove Current Task
        e.target.parentNode.remove();

        // Check number of tasks inside the container
        if (tasksContainer.childElementCount == 0) {
            
            createNoTask();
            
        }
    }

    // Finish Task 
    if (e.target.classList.contains('task-box')) {

        //Toggle Class finished
        e.target.classList.toggle("finished");
    }

    calculateTasks();
});

// Function to create No Task Message
function createNoTask () {

    //Create Message span Element
    let msgSpan = document.createElement("span");

    //Create the Text Message
    let msgText = document.createTextNode("no task to show");

    // add text to message
    msgSpan.appendChild(msgText);

    // Add class to mesage span
    msgSpan.className='no-task-message';

    // Append the Message span Element to the Container
    tasksContainer.appendChild(msgSpan);
}

// Function To Calculate Tasks
function calculateTasks () {

    //Calculate All Tasks
    taskCount.innerHTML = document.querySelectorAll('.task-content .task-box').length

    //Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.task-content .finished').length
}