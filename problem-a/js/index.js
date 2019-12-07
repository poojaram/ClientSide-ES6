'use strict';

/* your code goes here! */

class Task {
  constructor(description, complete) {
    this.description = description;
    this.complete = complete;
  }

  render() {
    let li = document.createElement('li');
    li.textContent = this.description;
    if (this.complete) {
      li.classList.add('font-strike');
    }
    li.addEventListener('click', () => {
      this.toggleFinished();
      li.classList.toggle('font-strike')
    });
    return li;
  }

  toggleFinished() {
    this.complete = !(this.complete);
  }
}

class TaskList {
  constructor(Task) {
    this.tasks = Task;
  }

  addTask(description) {
    let newTask = new Task(description, false);
    this.tasks.push(newTask);
  }

  render() {
    let ol = document.createElement('ol');
    this.tasks.forEach(task => {
      let li = task.render();
      ol.append(li);
    });
    return ol;
    }
}

class NewTaskForm {
  constructor(callback) {
    this.submitCallback = callback;
  }

  render() {
    let form = document.createElement('form');

    let input = document.createElement('input');
    input.classList.add('form-control', 'mb-3');
    input.setAttribute('placeholder', 'What else do you have to do?');
    form.append(input);

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = "Add task to list";
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this.submitCallback(input.value);
    })
    form.append(button);

    return form;
  }
}

class App {
  constructor(parentElement, TaskList) {
    this.parentElement = parentElement;
    this.taskList = TaskList;
  }

  render() {
    let renderedTaskList = this.taskList.render();
    this.parentElement.append(renderedTaskList);
    let taskForm = new NewTaskForm((description) => this.addTaskToList(description));
    let renderedTaskForm = taskForm.render();
    this.parentElement.append(renderedTaskForm);
  }

  addTaskToList(description) {
    this.taskList.addTask(description);
    while (this.parentElement.firstChild) {
      this.parentElement.removeChild(this.parentElement.firstChild);
    }
    this.render();
  }
}

let app = new App(document.getElementById("app"), new TaskList([new Task("Make some classes", true), new Task("Arrow some functions", false)]));
app.render();


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
