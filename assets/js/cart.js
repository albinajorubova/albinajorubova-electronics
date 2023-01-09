const cartsBtn = document.querySelectorAll(".iphone_buttoncart");
cartsBtn.forEach(onCartClick);

function onCartClick(items) {
  items.addEventListener("click", function () {
    let cartsBtn = items;

    if (!cartsBtn.classList.contains("active")) {
      tabsBtn.forEach(function (items) {
        cartsBtn.classList.remove("active");
      });

      cartsBtn.classList.add("active");
    }
  });
}
