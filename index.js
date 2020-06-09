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

//input item
//enter "Return"
//or CLICK button

/*
DOM ready
jQuery runs

jQuery runs -> throws error -> cancels all JS on the page
DOM ready

*/

//CLICK button to check or uncheck

//"delete" button CLICK to remove item from list

// INSTRUCTIONS
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button

// check and uncheck items on the list by clicking the "Check" button

// permanently remove items from the list

//USE THE FOLLOWING JQuery methods
// .submit()          |||The submit event occurs when a form is submitted. -only used on <form>|||

// preventDefault()  |||The currentTarget event property returns the element whose event listeners triggered the event.|||

// toggleClass()     |||toggles between adding and removing one or more class names from the selected elements|||

// closest()          |||returns the first ancestor of the selected element. -runs up the DOM tree: span > li > ul > div > body|||

//*use THIS and event delegation//
