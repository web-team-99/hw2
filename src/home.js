function onSidebarCollapseClicked(){
    console.log("sidebar-collapse clicked !!!"); 
    var classlist = document.getElementById("sidebar").classList;
    var collapseBtnClasslist = document.getElementById("sidebarCollapse").classList;
    if (classlist.contains("active")){
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

function swipeFromRight(classList, is_reversed){
    const swipe = "swipeAnimation";
    const swipe_reversed = "swipeAnimationReversed";
    if(is_reversed){
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