function onSidebarCollapseClicked() {
  console.log("sidebar-collapse clicked !!!");
  var classlist = document.getElementById("sidebar").classList;
  var collapseBtnClasslist = document.getElementById("sidebarCollapse")
    .classList;
  if (classlist.contains("active")) {
    swipeFromRight(classlist, true);
    classlist.remove("active");
    collapseBtnClasslist.add("active");
    console.log("class removed...");
    return;
  }
  swipeFromRight(classlist, false);
  classlist.add("active");
  collapseBtnClasslist.remove("active");
  console.log("class added...");
}

function swipeFromRight(classList, is_reversed) {
  const swipe = "swipeAnimation";
  const swipe_reversed = "swipeAnimationReversed";
  if (is_reversed) {
    classList.add(swipe_reversed);
    setTimeout(() => {
      classList.remove(swipe_reversed);
    }, 400);
    return;
  }
  classList.add(swipe);
  setTimeout(() => {
    classList.remove(swipe);
  }, 400);
}

function toggleNightMode(checkbox) {
  console.log("night Mode toggled.");
  // used theme
  const background_low = "--background-low";
  const background_med = "--background-med";
  const background_high = "--background-high";
  const text_low = "--text-low";
  const text_med = "--text-med";
  const text_high = "--text-high";
  const image_shadow = "--image-shadow";

  const docElementStyle = document.documentElement.style;
  let logos = document.getElementsByClassName("logoImg");

  if (checkbox.checked) {
    console.log("NightMode on");

    docElementStyle.setProperty(background_low, "var(--dark-background-low)");
    docElementStyle.setProperty(background_med, "var(--dark-background-med)");
    docElementStyle.setProperty(background_high, "var(--dark-background-high)");
    docElementStyle.setProperty(text_low, "var(--dark-text-low)");
    docElementStyle.setProperty(text_med, "var(--dark-text-med)");
    docElementStyle.setProperty(text_high, "var(--dark-text-high)");
    docElementStyle.setProperty(image_shadow, "var(--white-image-shadow)");

    logos[0].classList.add("disabledLogo");
    logos[1].classList.remove("disabledLogo");
    return;
  }
  console.log("NightMode off");

  docElementStyle.setProperty(background_low, "var(--light-background-low)");
  docElementStyle.setProperty(background_med, "var(--light-backgrounf-med)");
  docElementStyle.setProperty(background_high, "var(--light-background-high)");
  docElementStyle.setProperty(text_low, "var(--light-text-low)");
  docElementStyle.setProperty(text_med, "var(--light-text-med)");
  docElementStyle.setProperty(text_high, "var(--light-text-high)");
  docElementStyle.setProperty(image_shadow, "var(--black-image-shadow)");

  logos[1].classList.add("disabledLogo");
  logos[0].classList.remove("disabledLogo");
}

let tabs = document.getElementById("nav-tabs");
tabs.addEventListener("click", onTabClicked);

function onTabClicked(event) {
  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    console.log("removing active tab");
  }

  let tabContent = document.getElementsByClassName("tabContent");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    console.log("removing show content");
  }

  let contentID = event.target.id + "-content";
  console.log(contentID);
  document.getElementById(contentID).classList.add("show");
  document.getElementById(contentID).classList.add("in");
  document.getElementById(event.target.id).classList.add("active");
  console.log(
    document.getElementById(event.target.id).classList.contains("active")
  );
}
