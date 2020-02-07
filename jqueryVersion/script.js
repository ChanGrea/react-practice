let index = 0;
let todoList = [];

$("#addButton").click(() => {
  const input = $("#addInput").val();

  const checkbox = `<input type="checkbox" class="check"></div>`;
  const todo = `<div class="todo">${input}</div>`;
  const removeBtn = `<button class="removeBtn">[지우기]</button>`;

  const todoItem = `<div class="todoItem">${checkbox}${todo}${removeBtn}</div>`;

  todoList.push({ index: index++, todo });
  console.log(todoList);
  $("#todoList").append(todoItem);
});
