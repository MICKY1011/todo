let input = document.querySelector("input");
let button = document.querySelector("button");
let newPlace = document.querySelector(".new-card");

newPlace.innerHTML = localStorage.getItem("tasks");

function saveTasks() {
  localStorage.setItem("tasks", newPlace.innerHTML);
}

function display() {
  newPlace.innerHTML += `<div class="line">
    <input class="check" type="checkbox"/>
    <p>${input.value}</p>
    <div class="button-section">
      <button onclick="updateButton(this)" class="update">update</button>
      <button onclick="deleteButton(this)" class="delete">delete</button>
    </div>
    </div>`;
  input.value = "";
  saveTasks();
}

function updateButton(obj) {
  let paragraph = obj.parentElement.parentElement.children[1];
  let newText = prompt("Enter the new text:", paragraph.textContent);
  if (newText !== null) {
    paragraph.textContent = newText;
  }
  let checkbox = obj.parentElement.parentElement.querySelector("input[type='checkbox']");
  if (checkbox.checked) {
    paragraph.style.cssText = "text-decoration: line-through;";
    checkbox.setAttribute("checked", "checked");
  } else {
    paragraph.style.cssText = "text-decoration: none;";
    checkbox.removeAttribute("checked");
  }
  saveTasks();
}

function deleteButton(obj) {
  obj.parentElement.parentElement.remove();
  console.log(obj.parentElement.parentElement);
  saveTasks();
}

button.addEventListener("click", display);
