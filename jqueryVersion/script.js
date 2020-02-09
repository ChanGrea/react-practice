$("#addButton").click(() => {
  const input = $("#addInput").val();
  const todo = $(`<div class="text"></div>`);
  todo.append(input);

  const checkbox = $(`<input type="checkbox" class="tick"></div>`);
  const removeBtn = $(`<button class="delete">[지우기]</button>`);
  const todoItem = $(`<div class="todoItem"></div>`);
  todoItem
    .append(checkbox)
    .append(todo)
    .append(removeBtn);

  $(todoItem).click(() => {
    if ($(checkbox).is(":checked")) {
      $(checkbox).prop("checked", false);
      $(todo).css("text-decoration", "none");
    } else {
      $(checkbox).prop("checked", true);
      $(todo).css("text-decoration", "line-through");
    }
  });

  $(removeBtn).click(e => {
    e.stopPropagation();
    $(todoItem).remove();
  });

  $("#todoList").append(todoItem);
});
