// Controller
var taskDescriptionInput = document.getElementById('taskDescription');

function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        name: taskname.value,
        frist: taskFrist.value,
        dato: taskdato.value,
        isDone: false
    });
    taskDescriptionInput.value = '';
    taskname.value = '';
    taskFris.value = '';
    taskdato.value = '';
    show();
}