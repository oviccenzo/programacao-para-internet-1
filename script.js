  const input = document.getElementById("taskInput");
  const taskTest = input.value.trim();

  if(taskTest == ""){
    alert("Digite uma tarefa!")
    return;
  }

  const list = document.getElementById("todoList");
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML =` ${taskTest}<button class="delete-btn onclcick(this)>"Excluir</button>`
  
  list.append(li)
  input.value ="";

  function deleteTask(button){
    const li = button.parentElement;

    li.romove();
  }
