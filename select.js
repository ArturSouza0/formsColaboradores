var default_option_item = document.querySelector(".default_option .option");

var default_option_text = document.querySelector(".default_option .text");
var default_option_count = document.querySelector(".default_option .count");

var select_ul_item = document.querySelectorAll(".select_ul .option");

var input_items = document.querySelectorAll(".select_ul .input");

default_option_item.addEventListener("click", function () {
  this.closest(".default_option").classList.toggle("active");
});

select_ul_item.forEach(function (item) {
  item.addEventListener("click", function (event) {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      item.children[0].checked = true;
    } else {
      item.children[0].checked = false;
    }

    var count = 0;
    input_items.forEach(function (input_item) {
      if (input_item.checked === true) {
        count++;
        default_option_count.style.display = "inline-block";
        default_option_count.textContent = count;
        default_option_text.textContent = "Itens Escolhidos";
      } else if (input_item.checked === false && count === 0) {
        default_option_count.style.display = "none";
        default_option_count.textContent = "";
        default_option_text.textContent = "Escolha";
      }
    });
  });
});
