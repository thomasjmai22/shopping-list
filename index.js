$(function updateList() {
  $("#js-shopping-list-form").submit((event) => {
    // this stops the default form submission behavior
    event.preventDefault();
    const userInput = $("#shopping-list-entry").val();
    $("#shopping-list-entry").val("");

    $(".shopping-list").append(`
      <li>
      <span class="shopping-item">${userInput}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
  });

  $(".shopping-list").on("click", ".shopping-item-toggle", (e) => {
    $(e.currentTarget)
      .parent()
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function () {
    $(this).closest("li").remove();
  });
});

$(updateList);
