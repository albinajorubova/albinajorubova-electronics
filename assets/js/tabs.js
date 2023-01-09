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

// карусель iphone_recentlywatched

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev"),
  clicked1 = document.querySelectorAll(".iphone_watchedcard").length - 4;
console.log(clicked1);
let n = 0;
for (let k = 0; k <= clicked1; k++)
  next.onclick = function () {
    if (carousel.style.marginLeft !== n + "px") {
      prev.style.display = "flex";
    }
    if (carousel.style.marginLeft == "-564px") {
      next.style.display = "none";
    }
    if (carousel.style.marginLeft !== "-564px") {
      next.style.display = "flex";
    }
    n += -282;
    carousel.style.marginLeft = n + "px";
    console.log("clicked");
    k++;
  };

for (let k = 0; k < clicked1; k++)
  prev.onclick = function () {
    if (carousel.style.marginLeft == "-282px") {
      prev.style.display = "none";
    }
    n += +282;
    carousel.style.marginLeft = n + "px";
    console.log("clicked");
  };

// const heartItem = document.querySelectorAll(".iphone_iconheart");
// function heart() {
//   if (!heartItem.classList.contains("active")) {
//     heartItem.classList.add("active");
//   } else {
//     heartItem.classList.remove("active");
//   }
// }

// heartItem.onclick = heart;
