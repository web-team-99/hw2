function onSidebarCollapseClicked() {
    console.log("sidebar-collapse clicked !!!");
    var classlist = document.getElementById("sidebar").classList;
    var collapseBtnClasslist = document.getElementById("sidebarCollapse").classList;
    if (classlist.contains("active")) {
        swipeFromRight(classlist, true);
        classlist.remove("active");
        collapseBtnClasslist.add("active");
        console.log('class removed...');
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
    console.log('night Mode toggled.');
    // used theme
    const background_low = "--background-low";
    const background_med = "--background-med";
    const background_high = "--background-high";
    const text_low = "--text-low";
    const text_med = "--text-med";
    const text_high = "--text-high";

    const docElementStyle = document.documentElement.style;
    
    if (checkbox.checked) {
        console.log("NightMode on");

        docElementStyle.setProperty(background_low, "var(--dark-background-low)");
        docElementStyle.setProperty(background_med, "var(--dark-background-med)");
        docElementStyle.setProperty(background_high, "var(--dark-background-high)");
        docElementStyle.setProperty(text_low, "var(--dark-text-low)");
        docElementStyle.setProperty(text_med, "var(--dark-text-med)");
        docElementStyle.setProperty(text_high, "var(--dark-text-high)");
        return;
    }
    console.log("NightMode off");
    
    docElementStyle.setProperty(background_low, "var(--light-background-low)");
    docElementStyle.setProperty(background_med, "var(--light-backgrounf-med)");
    docElementStyle.setProperty(background_high, "var(--light-background-high)");
    docElementStyle.setProperty(text_low, "var(--light-text-low)");
    docElementStyle.setProperty(text_med, "var(--light-text-med)");
    docElementStyle.setProperty(text_high, "var(--light-text-high)");
}

