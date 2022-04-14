//Cách 1: Xài let (ES6)
// let isPrimaryColor = false;
// let isPrimaryIcon = "far fa-moon";
// document.getElementById("mode__switch").onclick = function () {
//     // This flips the truthiness.
//     isPrimaryColor = !isPrimaryColor;
//     isPrimaryIcon = !isPrimaryIcon

//     // This is a ternary operator.
//     let activeColor = isPrimaryColor ? "#232220" : "white";
//     let activeIcon = isPrimaryIcon ? "far fa-moon" : "far fa-sun";

//     // Do your style setting here.
//     document.getElementById("search__bar").style.backgroundColor = activeColor;
//     document.getElementById("mode__switch").className = activeIcon;
// }

//Cách 2: Xài addClass
// document.getElementById("navbar__icon").onclick = function () {
//     // var defaultClass = document.getElementById("navbar__icon").className = false;
//         document.getElementById("navbar__icon").classList.add("dark__mode")

// };

// document.getElementById("mode__switch").onclick = function () {
//     if (document.getElementById("search__bar").className == "search__bar__light")
//         document.getElementById("search__bar").className = "search__bar__dark";
//     else 
//     document.getElementById("search__bar").className = "search__bar__light";
// }

document.getElementById("mode__switch").onclick = function () {
    if (document.getElementById("mode__switch").classList.contains("fa-moon")) {
        document.getElementById("mode__switch").classList.remove("fa-moon");
        document.getElementById("mode__switch").classList.add("fa-sun");
    }
    else {
        document.getElementById("mode__switch").classList.add("fa-moon");
        document.getElementById("mode__switch").classList.remove("fa-sun");
    }



    if (document.getElementById("search__bar").classList.contains("search__bar__light")) {
        document.getElementById("search__bar").classList.remove("search__bar__light");
        document.getElementById("search__bar").classList.add("search__bar__dark");
    }
    else {
        document.getElementById("search__bar").classList.add("search__bar__light");
        document.getElementById("search__bar").classList.remove("search__bar__dark");
    }

    if (document.getElementById("about").classList.contains("about__light")) {
        document.getElementById("about").classList.remove("about__light");
        document.getElementById("about").classList.add("about__dark");
    }
    else {
        document.getElementById("about").classList.add("about__light");
        document.getElementById("about").classList.remove("about__dark");
    }

    if (document.getElementById("about__left__intro").classList.contains("about__left__intro__light")) {
        document.getElementById("about__left__intro").classList.remove("about__left__intro__light");
        document.getElementById("about__left__intro").classList.add("about__left__intro__dark");
    }
    else {
        document.getElementById("about__left__intro").classList.add("about__left__intro__light");
        document.getElementById("about__left__intro").classList.remove("about__left__intro__dark");
    }

    if (document.getElementById("about__right__p1").classList.contains("about__right__p1__light")) {
        document.getElementById("about__right__p1").classList.remove("about__right__p1__light");
        document.getElementById("about__right__p1").classList.add("about__right__p1__dark");
    }
    else {
        document.getElementById("about__right__p1").classList.add("about__right__p1__light");
        document.getElementById("about__right__p1").classList.remove("about__right__p1__dark");
    }

    if (document.getElementById("about__right__p2").classList.contains("about__right__p2__light")) {
        document.getElementById("about__right__p2").classList.remove("about__right__p2__light");
        document.getElementById("about__right__p2").classList.add("about__right__p2__dark");
    }
    else {
        document.getElementById("about__right__p2").classList.add("about__right__p2__light");
        document.getElementById("about__right__p2").classList.remove("about__right__p2__dark");
    }
}