var selectedState = "IS";
function selectState(stateName) {
    var elementSelectables = document.getElementsByClassName("es")
    for (var i=0; i<elementSelectables.length; i++) {
        if (elementSelectables[i].classList) {
            if (elementSelectables[i].innerHTML.includes(stateName)) {
                elementSelectables[i].classList.add("active");
                selectedState = stateName;
                setData();
            } else if (elementSelectables[i].classList.contains("active")) {
                elementSelectables[i].classList.remove("active")
            }
        }
    }
}