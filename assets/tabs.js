const tabsBtn = document.querySelectorAll(".iphone_navlinks");
const tabsItems = document.querySelectorAll(".iphone_navlink-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

const container = document.querySelector(".footer_container");
const tabTwo = document.querySelector(".tab-2");
tabTwo.addEventListener("click", () => {
  container.style.position = "relative";
  container.style.top = "4100px";
});

const tabOne = document.querySelector(".tab-1");
tabOne.addEventListener("click", () => {
  container.style.position = "absolute";
  container.style.top = "2300px";
});
