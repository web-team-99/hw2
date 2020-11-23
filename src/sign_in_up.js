let tabs = document.getElementById("tabs");
tabs.addEventListener("click", onTabsClicked);

function onTabsClicked(event) {
  let i, tabcontents, tabs;

  tabcontents = document.getElementsByClassName("form");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("show");
  }

  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    tabs[i].classList.remove("bg-light");
  }

  let formID = event.target.id + "-form";
  document.getElementById(formID).classList.add("show");
  event.target.classList.add("active");
  event.target.classList.add("bg-light");
}
