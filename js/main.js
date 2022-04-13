document.getElementById("mode__switch").onclick = function () {
    // document.getElementById("search__bar").style.backgroundColor = "black";
    document.getElementById("search__bar").classList.add("search__bar__dark");
    document.getElementById("mode__switch").className = "far fa-sun";
}

// document.getElementById("mode__switch").onclick = function () {
//     document.getElementById("search__bar").classList.add("search__bar__light");
//     document.getElementById("search__bar").classList.remove("search__bar__dark")
//     document.getElementById("mode__switch").className = "far fa-sun";
// }