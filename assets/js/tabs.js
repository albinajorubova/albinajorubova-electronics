const tabsBtn = document.querySelectorAll(".iphone_navlinks");
const tabsItems = document.querySelectorAll(".iphone_navlink-item");
const container = document.querySelector(".footer_container");
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

const tabSix = document.querySelector(".tab-6");
const popularReview = document.querySelector(".product_popularreview");
const recentlyWatched = document.querySelector(".iphone_recentlywatched");
tabSix.addEventListener("click", () => {
  container.style.position = "relative";
  container.style.top = "3800px";
  popularReview.style.display = "none";

  recentlyWatched.style.position = "absolute";
  recentlyWatched.style.top = "400px";
});

const tabTwo = document.querySelector(".tab-2");
tabTwo.addEventListener("click", () => {
  container.style.position = "relative";
  container.style.top = "4100px";
  popularReview.style.display = "flex";

  recentlyWatched.style.position = " absolute";
  recentlyWatched.style.top = "900px ";
});

const tabOne = document.querySelector(".tab-1");
tabOne.addEventListener("click", () => {
  container.style.position = "absolute";
  container.style.top = "2300px";
  popularReview.style.display = "flex";

  recentlyWatched.style.position = "absolute";
  recentlyWatched.style.top = "900px";
});
