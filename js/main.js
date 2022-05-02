// //Cách 1: Xài let (ES6)
// // let isPrimaryColor = false;
// // let isPrimaryIcon = "far fa-moon";
// // document.getElementById("mode__switch").onclick = function () {
// //     // This flips the truthiness.
// //     isPrimaryColor = !isPrimaryColor;
// //     isPrimaryIcon = !isPrimaryIcon

// //     // This is a ternary operator.
// //     let activeColor = isPrimaryColor ? "#232220" : "white";
// //     let activeIcon = isPrimaryIcon ? "far fa-moon" : "far fa-sun";

// //     // Do your style setting here.
// //     document.getElementById("search__bar").style.backgroundColor = activeColor;
// //     document.getElementById("mode__switch").className = activeIcon;
// // }

// //Cách 2: Xài addClass
// // document.getElementById("navbar__icon").onclick = function () {
// //     // var defaultClass = document.getElementById("navbar__icon").className = false;
// //         document.getElementById("navbar__icon").classList.add("dark__mode")

// // };

// // document.getElementById("mode__switch").onclick = function () {
// //     if (document.getElementById("search__bar").className == "search__bar__light")
// //         document.getElementById("search__bar").className = "search__bar__dark";
// //     else 
// //     document.getElementById("search__bar").className = "search__bar__light";
// // }

// document.getElementById("mode__switch").onclick = function () {
//     if (document.getElementById("mode__switch").classList.contains("fa-moon")) {
//         document.getElementById("mode__switch").classList.remove("fa-moon");
//         document.getElementById("mode__switch").classList.add("fa-sun");
//     }
//     else {
//         document.getElementById("mode__switch").classList.add("fa-moon");
//         document.getElementById("mode__switch").classList.remove("fa-sun");
//     }



//     if (document.getElementById("search__bar").classList.contains("search__bar__light")) {
//         document.getElementById("search__bar").classList.remove("search__bar__light");
//         document.getElementById("search__bar").classList.add("search__bar__dark");
//     }
//     else {
//         document.getElementById("search__bar").classList.add("search__bar__light");
//         document.getElementById("search__bar").classList.remove("search__bar__dark");
//     }

//     if (document.getElementById("about").classList.contains("about__light")) {
//         document.getElementById("about").classList.remove("about__light");
//         document.getElementById("about").classList.add("about__dark");
//     }
//     else {
//         document.getElementById("about").classList.add("about__light");
//         document.getElementById("about").classList.remove("about__dark");
//     }

//     if (document.getElementById("about__left__intro").classList.contains("about__left__intro__light")) {
//         document.getElementById("about__left__intro").classList.remove("about__left__intro__light");
//         document.getElementById("about__left__intro").classList.add("about__left__intro__dark");
//     }
//     else {
//         document.getElementById("about__left__intro").classList.add("about__left__intro__light");
//         document.getElementById("about__left__intro").classList.remove("about__left__intro__dark");
//     }

//     if (document.getElementById("about__right__p1").classList.contains("about__right__p1__light")) {
//         document.getElementById("about__right__p1").classList.remove("about__right__p1__light");
//         document.getElementById("about__right__p1").classList.add("about__right__p1__dark");
//     }
//     else {
//         document.getElementById("about__right__p1").classList.add("about__right__p1__light");
//         document.getElementById("about__right__p1").classList.remove("about__right__p1__dark");
//     }

//     if (document.getElementById("about__right__p2").classList.contains("about__right__p2__light")) {
//         document.getElementById("about__right__p2").classList.remove("about__right__p2__light");
//         document.getElementById("about__right__p2").classList.add("about__right__p2__dark");
//     }
//     else {
//         document.getElementById("about__right__p2").classList.add("about__right__p2__light");
//         document.getElementById("about__right__p2").classList.remove("about__right__p2__dark");
//     }

//     if (document.getElementById("categories").classList.contains("categories__light")) {
//         document.getElementById("categories").classList.remove("categories__light");
//         document.getElementById("categories").classList.add("categories__dark");
//     }
//     else {
//         document.getElementById("categories").classList.add("categories__light");
//         document.getElementById("categories").classList.remove("categories__dark");
//     }

//     if (document.getElementById("categories__text__header").classList.contains("categories__text__header__light")) {
//         document.getElementById("categories__text__header").classList.remove("categories__text__header__light");
//         document.getElementById("categories__text__header").classList.add("categories__text__header__dark");
//     }
//     else {
//         document.getElementById("categories__text__header").classList.add("categories__text__header__light");
//         document.getElementById("categories__text__header").classList.remove("categories__text__header__dark");
//     }

//     if (document.getElementById("menu").classList.contains("menu__light")) {
//         document.getElementById("menu").classList.remove("menu__light");
//         document.getElementById("menu").classList.add("menu__dark");
//     }
//     else {
//         document.getElementById("menu").classList.add("menu__light");
//         document.getElementById("menu").classList.remove("menu__dark");
//     }

//     if (document.getElementById("menuItem__1").classList.contains("menu__item__light")) {
//         document.getElementById("menuItem__1").classList.remove("menu__item__light");
//         document.getElementById("menuItem__1").classList.add("menu__item__dark");
//     }
//     else {
//         document.getElementById("menuItem__1").classList.add("menu__item__light");
//         document.getElementById("menuItem__1").classList.remove("menu__item__dark");
//     }

//     if (document.getElementById("menuItem__2").classList.contains("menu__item__light")) {
//         document.getElementById("menuItem__2").classList.remove("menu__item__light");
//         document.getElementById("menuItem__2").classList.add("menu__item__dark");
//     }
//     else {
//         document.getElementById("menuItem__2").classList.add("menu__item__light");
//         document.getElementById("menuItem__2").classList.remove("menu__item__dark");
//     }

//     if (document.getElementById("menuItem__3").classList.contains("menu__item__light")) {
//         document.getElementById("menuItem__3").classList.remove("menu__item__light");
//         document.getElementById("menuItem__3").classList.add("menu__item__dark");
//     }
//     else {
//         document.getElementById("menuItem__3").classList.add("menu__item__light");
//         document.getElementById("menuItem__3").classList.remove("menu__item__dark");
//     }

//     if (document.getElementById("menuItem__4").classList.contains("menu__item__light")) {
//         document.getElementById("menuItem__4").classList.remove("menu__item__light");
//         document.getElementById("menuItem__4").classList.add("menu__item__dark");
//     }
//     else {
//         document.getElementById("menuItem__4").classList.add("menu__item__light");
//         document.getElementById("menuItem__4").classList.remove("menu__item__dark");
//     }

//     if (document.getElementById("menuItem__5").classList.contains("menu__item__light")) {
//         document.getElementById("menuItem__5").classList.remove("menu__item__light");
//         document.getElementById("menuItem__5").classList.add("menu__item__dark");
//     }
//     else {
//         document.getElementById("menuItem__5").classList.add("menu__item__light");
//         document.getElementById("menuItem__5").classList.remove("menu__item__dark");
//     }

//     if (document.getElementById("menuItem__6").classList.contains("menu__item__light")) {
//         document.getElementById("menuItem__6").classList.remove("menu__item__light");
//         document.getElementById("menuItem__6").classList.add("menu__item__dark");
//     }
//     else {
//         document.getElementById("menuItem__6").classList.add("menu__item__light");
//         document.getElementById("menuItem__6").classList.remove("menu__item__dark");
//     }
  
   
//     if (document.getElementById("menu__upper__icon1").classList.contains("menu__upper__icon__light")) {
//         document.getElementById("menu__upper__icon1").classList.remove("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon1").classList.add("menu__upper__icon__dark");
//     }
//     else {
//         document.getElementById("menu__upper__icon1").classList.add("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon1").classList.remove("menu__upper__icon__dark");
//     }

//     if (document.getElementById("menu__upper__icon2").classList.contains("menu__upper__icon__light")) {
//         document.getElementById("menu__upper__icon2").classList.remove("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon2").classList.add("menu__upper__icon__dark");
//     }
//     else {
//         document.getElementById("menu__upper__icon2").classList.add("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon2").classList.remove("menu__upper__icon__dark");
//     }

//     if (document.getElementById("menu__upper__icon3").classList.contains("menu__upper__icon__light")) {
//         document.getElementById("menu__upper__icon3").classList.remove("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon3").classList.add("menu__upper__icon__dark");
//     }
//     else {
//         document.getElementById("menu__upper__icon3").classList.add("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon3").classList.remove("menu__upper__icon__dark");
//     }

//     if (document.getElementById("menu__upper__icon4").classList.contains("menu__upper__icon__light")) {
//         document.getElementById("menu__upper__icon4").classList.remove("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon4").classList.add("menu__upper__icon__dark");
//     }
//     else {
//         document.getElementById("menu__upper__icon4").classList.add("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon4").classList.remove("menu__upper__icon__dark");
//     }

//     if (document.getElementById("menu__upper__icon5").classList.contains("menu__upper__icon__light")) {
//         document.getElementById("menu__upper__icon5").classList.remove("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon5").classList.add("menu__upper__icon__dark");
//     }
//     else {
//         document.getElementById("menu__upper__icon5").classList.add("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon5").classList.remove("menu__upper__icon__dark");
//     }

//     if (document.getElementById("menu__upper__icon6").classList.contains("menu__upper__icon__light")) {
//         document.getElementById("menu__upper__icon6").classList.remove("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon6").classList.add("menu__upper__icon__dark");
//     }
//     else {
//         document.getElementById("menu__upper__icon6").classList.add("menu__upper__icon__light");
//         document.getElementById("menu__upper__icon6").classList.remove("menu__upper__icon__dark");
//     }

//     if (document.getElementById("upper__desc__number1").classList.contains("upper__desc__number__light")) {
//         document.getElementById("upper__desc__number1").classList.remove("upper__desc__number__light");
//         document.getElementById("upper__desc__number1").classList.add("upper__desc__number__dark");
//     }
//     else {
//         document.getElementById("upper__desc__number1").classList.add("upper__desc__number__light");
//         document.getElementById("upper__desc__number1").classList.remove("upper__desc__number__dark");
//     }
    
//     if (document.getElementById("upper__desc__number2").classList.contains("upper__desc__number__light")) {
//         document.getElementById("upper__desc__number2").classList.remove("upper__desc__number__light");
//         document.getElementById("upper__desc__number2").classList.add("upper__desc__number__dark");
//     }
//     else {
//         document.getElementById("upper__desc__number2").classList.add("upper__desc__number__light");
//         document.getElementById("upper__desc__number2").classList.remove("upper__desc__number__dark");
//     }

    
//     if (document.getElementById("upper__desc__number3").classList.contains("upper__desc__number__light")) {
//         document.getElementById("upper__desc__number3").classList.remove("upper__desc__number__light");
//         document.getElementById("upper__desc__number3").classList.add("upper__desc__number__dark");
//     }
//     else {
//         document.getElementById("upper__desc__number3").classList.add("upper__desc__number__light");
//         document.getElementById("upper__desc__number3").classList.remove("upper__desc__number__dark");
//     }

    
//     if (document.getElementById("upper__desc__number4").classList.contains("upper__desc__number__light")) {
//         document.getElementById("upper__desc__number4").classList.remove("upper__desc__number__light");
//         document.getElementById("upper__desc__number4").classList.add("upper__desc__number__dark");
//     }
//     else {
//         document.getElementById("upper__desc__number4").classList.add("upper__desc__number__light");
//         document.getElementById("upper__desc__number4").classList.remove("upper__desc__number__dark");
//     }

    
//     if (document.getElementById("upper__desc__number5").classList.contains("upper__desc__number__light")) {
//         document.getElementById("upper__desc__number5").classList.remove("upper__desc__number__light");
//         document.getElementById("upper__desc__number5").classList.add("upper__desc__number__dark");
//     }
//     else {
//         document.getElementById("upper__desc__number5").classList.add("upper__desc__number__light");
//         document.getElementById("upper__desc__number5").classList.remove("upper__desc__number__dark");
//     }

    
//     if (document.getElementById("upper__desc__number6").classList.contains("upper__desc__number__light")) {
//         document.getElementById("upper__desc__number6").classList.remove("upper__desc__number__light");
//         document.getElementById("upper__desc__number6").classList.add("upper__desc__number__dark");
//     }
//     else {
//         document.getElementById("upper__desc__number6").classList.add("upper__desc__number__light");
//         document.getElementById("upper__desc__number6").classList.remove("upper__desc__number__dark");
//     }

//     if (document.getElementById("upper__desc__item1").classList.contains("upper__desc__item__light")) {
//         document.getElementById("upper__desc__item1").classList.remove("upper__desc__item__light");
//         document.getElementById("upper__desc__item1").classList.add("upper__desc__item__dark");
//     }
//     else {
//         document.getElementById("upper__desc__item1").classList.add("upper__desc__item__light");
//         document.getElementById("upper__desc__item1").classList.remove("upper__desc__item__dark");
//     }

//     if (document.getElementById("upper__desc__item2").classList.contains("upper__desc__item__light")) {
//         document.getElementById("upper__desc__item2").classList.remove("upper__desc__item__light");
//         document.getElementById("upper__desc__item2").classList.add("upper__desc__item__dark");
//     }
//     else {
//         document.getElementById("upper__desc__item2").classList.add("upper__desc__item__light");
//         document.getElementById("upper__desc__item2").classList.remove("upper__desc__item__dark");
//     }

//     if (document.getElementById("upper__desc__item3").classList.contains("upper__desc__item__light")) {
//         document.getElementById("upper__desc__item3").classList.remove("upper__desc__item__light");
//         document.getElementById("upper__desc__item3").classList.add("upper__desc__item__dark");
//     }
//     else {
//         document.getElementById("upper__desc__item3").classList.add("upper__desc__item__light");
//         document.getElementById("upper__desc__item3").classList.remove("upper__desc__item__dark");
//     }

//     if (document.getElementById("upper__desc__item4").classList.contains("upper__desc__item__light")) {
//         document.getElementById("upper__desc__item4").classList.remove("upper__desc__item__light");
//         document.getElementById("upper__desc__item4").classList.add("upper__desc__item__dark");
//     }
//     else {
//         document.getElementById("upper__desc__item4").classList.add("upper__desc__item__light");
//         document.getElementById("upper__desc__item4").classList.remove("upper__desc__item__dark");
//     }

//     if (document.getElementById("upper__desc__item5").classList.contains("upper__desc__item__light")) {
//         document.getElementById("upper__desc__item5").classList.remove("upper__desc__item__light");
//         document.getElementById("upper__desc__item5").classList.add("upper__desc__item__dark");
//     }
//     else {
//         document.getElementById("upper__desc__item5").classList.add("upper__desc__item__light");
//         document.getElementById("upper__desc__item5").classList.remove("upper__desc__item__dark");
//     }

//     if (document.getElementById("upper__desc__item6").classList.contains("upper__desc__item__light")) {
//         document.getElementById("upper__desc__item6").classList.remove("upper__desc__item__light");
//         document.getElementById("upper__desc__item6").classList.add("upper__desc__item__dark");
//     }
//     else {
//         document.getElementById("upper__desc__item6").classList.add("upper__desc__item__light");
//         document.getElementById("upper__desc__item6").classList.remove("upper__desc__item__dark");
//     }

//     if (document.getElementById("menu__lower__text1").classList.contains("menu__lower__text__light")) {
//         document.getElementById("menu__lower__text1").classList.remove("menu__lower__text__light");
//         document.getElementById("menu__lower__text1").classList.add("menu__lower__text__dark");
//     }
//     else {
//         document.getElementById("menu__lower__text1").classList.add("menu__lower__text__light");
//         document.getElementById("menu__lower__text1").classList.remove("menu__lower__text__dark");
//     }

//     if (document.getElementById("menu__lower__text2").classList.contains("menu__lower__text__light")) {
//         document.getElementById("menu__lower__text2").classList.remove("menu__lower__text__light");
//         document.getElementById("menu__lower__text2").classList.add("menu__lower__text__dark");
//     }
//     else {
//         document.getElementById("menu__lower__text2").classList.add("menu__lower__text__light");
//         document.getElementById("menu__lower__text2").classList.remove("menu__lower__text__dark");
//     }


//     if (document.getElementById("menu__lower__text3").classList.contains("menu__lower__text__light")) {
//         document.getElementById("menu__lower__text3").classList.remove("menu__lower__text__light");
//         document.getElementById("menu__lower__text3").classList.add("menu__lower__text__dark");
//     }
//     else {
//         document.getElementById("menu__lower__text3").classList.add("menu__lower__text__light");
//         document.getElementById("menu__lower__text3").classList.remove("menu__lower__text__dark");
//     }


//     if (document.getElementById("menu__lower__text4").classList.contains("menu__lower__text__light")) {
//         document.getElementById("menu__lower__text4").classList.remove("menu__lower__text__light");
//         document.getElementById("menu__lower__text4").classList.add("menu__lower__text__dark");
//     }
//     else {
//         document.getElementById("menu__lower__text4").classList.add("menu__lower__text__light");
//         document.getElementById("menu__lower__text4").classList.remove("menu__lower__text__dark");
//     }

//     if (document.getElementById("menu__lower__text5").classList.contains("menu__lower__text__light")) {
//         document.getElementById("menu__lower__text5").classList.remove("menu__lower__text__light");
//         document.getElementById("menu__lower__text5").classList.add("menu__lower__text__dark");
//     }
//     else {
//         document.getElementById("menu__lower__text5").classList.add("menu__lower__text__light");
//         document.getElementById("menu__lower__text5").classList.remove("menu__lower__text__dark");
//     }

//     if (document.getElementById("menu__lower__text6").classList.contains("menu__lower__text__light")) {
//         document.getElementById("menu__lower__text6").classList.remove("menu__lower__text__light");
//         document.getElementById("menu__lower__text6").classList.add("menu__lower__text__dark");
//     }
//     else {
//         document.getElementById("menu__lower__text6").classList.add("menu__lower__text__light");
//         document.getElementById("menu__lower__text6").classList.remove("menu__lower__text__dark");
//     }
    
//     if (document.getElementById("jumping__item1").classList.contains("jumping__item__light")) {
//         document.getElementById("jumping__item1").classList.remove("jumping__item__light");
//         document.getElementById("jumping__item1").classList.add("jumping__item__dark");
//     }
//     else {
//         document.getElementById("jumping__item1").classList.add("jumping__item__light");
//         document.getElementById("jumping__item1").classList.remove("jumping__item__dark");
//     }

//     if (document.getElementById("jumping__item2").classList.contains("jumping__item__light")) {
//         document.getElementById("jumping__item2").classList.remove("jumping__item__light");
//         document.getElementById("jumping__item2").classList.add("jumping__item__dark");
//     }
//     else {
//         document.getElementById("jumping__item2").classList.add("jumping__item__light");
//         document.getElementById("jumping__item2").classList.remove("jumping__item__dark");
//     }

//     if (document.getElementById("jumping__item3").classList.contains("jumping__item__light")) {
//         document.getElementById("jumping__item3").classList.remove("jumping__item__light");
//         document.getElementById("jumping__item3").classList.add("jumping__item__dark");
//     }
//     else {
//         document.getElementById("jumping__item3").classList.add("jumping__item__light");
//         document.getElementById("jumping__item3").classList.remove("jumping__item__dark");
//     }

//     if (document.getElementById("jumping__item4").classList.contains("jumping__item__light")) {
//         document.getElementById("jumping__item4").classList.remove("jumping__item__light");
//         document.getElementById("jumping__item4").classList.add("jumping__item__dark");
//     }
//     else {
//         document.getElementById("jumping__item4").classList.add("jumping__item__light");
//         document.getElementById("jumping__item4").classList.remove("jumping__item__dark");
//     }

//     if (document.getElementById("card__title__number1").classList.contains("card__title__number__light")) {
//         document.getElementById("card__title__number1").classList.remove("card__title__number__light");
//         document.getElementById("card__title__number1").classList.add("card__title__number__dark");
//     }
//     else {
//         document.getElementById("card__title__number1").classList.add("card__title__number__light");
//         document.getElementById("card__title__number1").classList.remove("card__title__number__dark");
//     }

//     if (document.getElementById("card__title__number2").classList.contains("card__title__number__light")) {
//         document.getElementById("card__title__number2").classList.remove("card__title__number__light");
//         document.getElementById("card__title__number2").classList.add("card__title__number__dark");
//     }
//     else {
//         document.getElementById("card__title__number2").classList.add("card__title__number__light");
//         document.getElementById("card__title__number2").classList.remove("card__title__number__dark");
//     }

//     if (document.getElementById("card__title__number3").classList.contains("card__title__number__light")) {
//         document.getElementById("card__title__number3").classList.remove("card__title__number__light");
//         document.getElementById("card__title__number3").classList.add("card__title__number__dark");
//     }
//     else {
//         document.getElementById("card__title__number3").classList.add("card__title__number__light");
//         document.getElementById("card__title__number3").classList.remove("card__title__number__dark");
//     }

//     if (document.getElementById("card__title__number4").classList.contains("card__title__number__light")) {
//         document.getElementById("card__title__number4").classList.remove("card__title__number__light");
//         document.getElementById("card__title__number4").classList.add("card__title__number__dark");
//     }
//     else {
//         document.getElementById("card__title__number4").classList.add("card__title__number__light");
//         document.getElementById("card__title__number4").classList.remove("card__title__number__dark");
//     }

//     if (document.getElementById("card__title__text1").classList.contains("card__title__text__light")) {
//         document.getElementById("card__title__text1").classList.remove("card__title__text__light");
//         document.getElementById("card__title__text1").classList.add("card__title__text__dark");
//     }
//     else {
//         document.getElementById("card__title__text1").classList.add("card__title__text__light");
//         document.getElementById("card__title__text1").classList.remove("card__title__text__dark");
//     }

//     if (document.getElementById("card__title__text2").classList.contains("card__title__text__light")) {
//         document.getElementById("card__title__text2").classList.remove("card__title__text__light");
//         document.getElementById("card__title__text2").classList.add("card__title__text__dark");
//     }
//     else {
//         document.getElementById("card__title__text2").classList.add("card__title__text__light");
//         document.getElementById("card__title__text2").classList.remove("card__title__text__dark");
//     }

//     if (document.getElementById("card__title__text3").classList.contains("card__title__text__light")) {
//         document.getElementById("card__title__text3").classList.remove("card__title__text__light");
//         document.getElementById("card__title__text3").classList.add("card__title__text__dark");
//     }
//     else {
//         document.getElementById("card__title__text3").classList.add("card__title__text__light");
//         document.getElementById("card__title__text3").classList.remove("card__title__text__dark");
//     }

//     if (document.getElementById("card__title__text4").classList.contains("card__title__text__light")) {
//         document.getElementById("card__title__text4").classList.remove("card__title__text__light");
//         document.getElementById("card__title__text4").classList.add("card__title__text__dark");
//     }
//     else {
//         document.getElementById("card__title__text4").classList.add("card__title__text__light");
//         document.getElementById("card__title__text4").classList.remove("card__title__text__dark");
//     }

//     if (document.getElementById("video").classList.contains("video__light")) {
//         document.getElementById("video").classList.remove("video__light");
//         document.getElementById("video").classList.add("video__dark");
//     }
//     else {
//         document.getElementById("video").classList.add("video__light");
//         document.getElementById("video").classList.remove("video__dark");
//     }

//     if (document.getElementById("blog").classList.contains("blog__light")) {
//         document.getElementById("blog").classList.remove("blog__light");
//         document.getElementById("blog").classList.add("blog__dark");
//     }
//     else {
//         document.getElementById("blog").classList.add("blog__light");
//         document.getElementById("blog").classList.remove("blog__dark");
//     }

//     if (document.getElementById("blog__title__header").classList.contains("blog__title__header__light")) {
//         document.getElementById("blog__title__header").classList.remove("blog__title__header__light");
//         document.getElementById("blog__title__header").classList.add("blog__title__header__dark");
//     }
//     else {
//         document.getElementById("blog__title__header").classList.add("blog__title__header__light");
//         document.getElementById("blog__title__header").classList.remove("blog__title__header__dark");
//     }

//     if (document.getElementById("blog__text__header1").classList.contains("blog__text__header__light")) {
//         document.getElementById("blog__text__header1").classList.remove("blog__text__header__light");
//         document.getElementById("blog__text__header1").classList.add("blog__text__header__dark");
//     }
//     else {
//         document.getElementById("blog__text__header1").classList.add("blog__text__header__light");
//         document.getElementById("blog__text__header1").classList.remove("blog__text__header__dark");
//     }

//     if (document.getElementById("blog__text__desc1").classList.contains("blog__text__desc__light")) {
//         document.getElementById("blog__text__desc1").classList.remove("blog__text__desc__light");
//         document.getElementById("blog__text__desc1").classList.add("blog__text__desc__dark");
//     }
//     else {
//         document.getElementById("blog__text__desc1").classList.add("blog__text__desc__light");
//         document.getElementById("blog__text__desc1").classList.remove("blog__text__desc__dark");
//     }
    
//     if (document.getElementById("blog__commentor1").classList.contains("blog__commentor__light")) {
//         document.getElementById("blog__commentor1").classList.remove("blog__commentor__light");
//         document.getElementById("blog__commentor1").classList.add("blog__commentor__dark");
//     }
//     else {
//         document.getElementById("blog__commentor1").classList.add("blog__commentor__light");
//         document.getElementById("blog__commentor1").classList.remove("blog__commentor__dark");
//     }
    
//     if (document.getElementById("blog__read1").classList.contains("blog__read__light")) {
//         document.getElementById("blog__read1").classList.remove("blog__read__light");
//         document.getElementById("blog__read1").classList.add("blog__read__dark");
//     }
//     else {
//         document.getElementById("blog__read1").classList.add("blog__read__light");
//         document.getElementById("blog__read1").classList.remove("blog__read__dark");
//     }

//     if (document.getElementById("blog__text__header2").classList.contains("blog__text__header__light")) {
//         document.getElementById("blog__text__header2").classList.remove("blog__text__header__light");
//         document.getElementById("blog__text__header2").classList.add("blog__text__header__dark");
//     }
//     else {
//         document.getElementById("blog__text__header2").classList.add("blog__text__header__light");
//         document.getElementById("blog__text__header2").classList.remove("blog__text__header__dark");
//     }

//     if (document.getElementById("blog__text__desc2").classList.contains("blog__text__desc__light")) {
//         document.getElementById("blog__text__desc2").classList.remove("blog__text__desc__light");
//         document.getElementById("blog__text__desc2").classList.add("blog__text__desc__dark");
//     }
//     else {
//         document.getElementById("blog__text__desc2").classList.add("blog__text__desc__light");
//         document.getElementById("blog__text__desc2").classList.remove("blog__text__desc__dark");
//     }
    
//     if (document.getElementById("blog__commentor2").classList.contains("blog__commentor__light")) {
//         document.getElementById("blog__commentor2").classList.remove("blog__commentor__light");
//         document.getElementById("blog__commentor2").classList.add("blog__commentor__dark");
//     }
//     else {
//         document.getElementById("blog__commentor2").classList.add("blog__commentor__light");
//         document.getElementById("blog__commentor2").classList.remove("blog__commentor__dark");
//     }
    
//     if (document.getElementById("blog__read2").classList.contains("blog__read__light")) {
//         document.getElementById("blog__read2").classList.remove("blog__read__light");
//         document.getElementById("blog__read2").classList.add("blog__read__dark");
//     }
//     else {
//         document.getElementById("blog__read2").classList.add("blog__read__light");
//         document.getElementById("blog__read2").classList.remove("blog__read__dark");
//     }

//     if (document.getElementById("blog__text__header3").classList.contains("blog__text__header__light")) {
//         document.getElementById("blog__text__header3").classList.remove("blog__text__header__light");
//         document.getElementById("blog__text__header3").classList.add("blog__text__header__dark");
//     }
//     else {
//         document.getElementById("blog__text__header3").classList.add("blog__text__header__light");
//         document.getElementById("blog__text__header3").classList.remove("blog__text__header__dark");
//     }

//     if (document.getElementById("blog__text__desc3").classList.contains("blog__text__desc__light")) {
//         document.getElementById("blog__text__desc3").classList.remove("blog__text__desc__light");
//         document.getElementById("blog__text__desc3").classList.add("blog__text__desc__dark");
//     }
//     else {
//         document.getElementById("blog__text__desc3").classList.add("blog__text__desc__light");
//         document.getElementById("blog__text__desc3").classList.remove("blog__text__desc__dark");
//     }
    
//     if (document.getElementById("blog__commentor3").classList.contains("blog__commentor__light")) {
//         document.getElementById("blog__commentor3").classList.remove("blog__commentor__light");
//         document.getElementById("blog__commentor3").classList.add("blog__commentor__dark");
//     }
//     else {
//         document.getElementById("blog__commentor3").classList.add("blog__commentor__light");
//         document.getElementById("blog__commentor3").classList.remove("blog__commentor__dark");
//     }
    
//     if (document.getElementById("blog__read3").classList.contains("blog__read__light")) {
//         document.getElementById("blog__read3").classList.remove("blog__read__light");
//         document.getElementById("blog__read3").classList.add("blog__read__dark");
//     }
//     else {
//         document.getElementById("blog__read3").classList.add("blog__read__light");
//         document.getElementById("blog__read3").classList.remove("blog__read__dark");
//     }

//     if (document.getElementById("testimonials").classList.contains("testimonials__light")) {
//         document.getElementById("testimonials").classList.remove("testimonials__light");
//         document.getElementById("testimonials").classList.add("testimonials__dark");
//     }
//     else {
//         document.getElementById("testimonials").classList.add("testimonials__light");
//         document.getElementById("testimonials").classList.remove("testimonials__dark");
//     }

//     if (document.getElementById("testimonials__title__header").classList.contains("testimonials__title__header__light")) {
//         document.getElementById("testimonials__title__header").classList.remove("testimonials__title__header__light");
//         document.getElementById("testimonials__title__header").classList.add("testimonials__title__header__dark");
//     }
//     else {
//         document.getElementById("testimonials__title__header").classList.add("testimonials__title__header__light");
//         document.getElementById("testimonials__title__header").classList.remove("testimonials__title__header__dark");
//     }

//     if (document.getElementById("testimonials__text__header1").classList.contains("testimonials__text__header__light")) {
//         document.getElementById("testimonials__text__header1").classList.remove("testimonials__text__header__light");
//         document.getElementById("testimonials__text__header1").classList.add("testimonials__text__header__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__header1").classList.add("testimonials__text__header__light");
//         document.getElementById("testimonials__text__header1").classList.remove("testimonials__text__header__dark");
//     }

//     if (document.getElementById("testimonials__text__comment1").classList.contains("testimonials__text__comment__light")) {
//         document.getElementById("testimonials__text__comment1").classList.remove("testimonials__text__comment__light");
//         document.getElementById("testimonials__text__comment1").classList.add("testimonials__text__comment__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__comment1").classList.add("testimonials__text__comment__light");
//         document.getElementById("testimonials__text__comment1").classList.remove("testimonials__text__comment__dark");
//     }

//     if (document.getElementById("testimonials__text__user1").classList.contains("testimonials__text__user__light")) {
//         document.getElementById("testimonials__text__user1").classList.remove("testimonials__text__user__light");
//         document.getElementById("testimonials__text__user1").classList.add("testimonials__text__user__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__user1").classList.add("testimonials__text__user__light");
//         document.getElementById("testimonials__text__user1").classList.remove("testimonials__text__user__dark");
//     }

//     if (document.getElementById("testimonials__text__role1").classList.contains("testimonials__text__role__light")) {
//         document.getElementById("testimonials__text__role1").classList.remove("testimonials__text__role__light");
//         document.getElementById("testimonials__text__role1").classList.add("testimonials__text__role__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__role1").classList.add("testimonials__text__role__light");
//         document.getElementById("testimonials__text__role1").classList.remove("testimonials__text__role__dark");
//     }
    
//     if (document.getElementById("testimonials__text__header2").classList.contains("testimonials__text__header__light")) {
//         document.getElementById("testimonials__text__header2").classList.remove("testimonials__text__header__light");
//         document.getElementById("testimonials__text__header2").classList.add("testimonials__text__header__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__header2").classList.add("testimonials__text__header__light");
//         document.getElementById("testimonials__text__header2").classList.remove("testimonials__text__header__dark");
//     }

//     if (document.getElementById("testimonials__text__comment2").classList.contains("testimonials__text__comment__light")) {
//         document.getElementById("testimonials__text__comment2").classList.remove("testimonials__text__comment__light");
//         document.getElementById("testimonials__text__comment2").classList.add("testimonials__text__comment__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__comment2").classList.add("testimonials__text__comment__light");
//         document.getElementById("testimonials__text__comment2").classList.remove("testimonials__text__comment__dark");
//     }

//     if (document.getElementById("testimonials__text__user2").classList.contains("testimonials__text__user__light")) {
//         document.getElementById("testimonials__text__user2").classList.remove("testimonials__text__user__light");
//         document.getElementById("testimonials__text__user2").classList.add("testimonials__text__user__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__user2").classList.add("testimonials__text__user__light");
//         document.getElementById("testimonials__text__user2").classList.remove("testimonials__text__user__dark");
//     }

//     if (document.getElementById("testimonials__text__role2").classList.contains("testimonials__text__role__light")) {
//         document.getElementById("testimonials__text__role2").classList.remove("testimonials__text__role__light");
//         document.getElementById("testimonials__text__role2").classList.add("testimonials__text__role__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__role2").classList.add("testimonials__text__role__light");
//         document.getElementById("testimonials__text__role2").classList.remove("testimonials__text__role__dark");
//     }
    
//     if (document.getElementById("testimonials__text__header3").classList.contains("testimonials__text__header__light")) {
//         document.getElementById("testimonials__text__header3").classList.remove("testimonials__text__header__light");
//         document.getElementById("testimonials__text__header3").classList.add("testimonials__text__header__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__header3").classList.add("testimonials__text__header__light");
//         document.getElementById("testimonials__text__header3").classList.remove("testimonials__text__header__dark");
//     }

//     if (document.getElementById("testimonials__text__comment3").classList.contains("testimonials__text__comment__light")) {
//         document.getElementById("testimonials__text__comment3").classList.remove("testimonials__text__comment__light");
//         document.getElementById("testimonials__text__comment3").classList.add("testimonials__text__comment__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__comment3").classList.add("testimonials__text__comment__light");
//         document.getElementById("testimonials__text__comment3").classList.remove("testimonials__text__comment__dark");
//     }

//     if (document.getElementById("testimonials__text__user3").classList.contains("testimonials__text__user__light")) {
//         document.getElementById("testimonials__text__user3").classList.remove("testimonials__text__user__light");
//         document.getElementById("testimonials__text__user3").classList.add("testimonials__text__user__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__user3").classList.add("testimonials__text__user__light");
//         document.getElementById("testimonials__text__user3").classList.remove("testimonials__text__user__dark");
//     }

//     if (document.getElementById("testimonials__text__role3").classList.contains("testimonials__text__role__light")) {
//         document.getElementById("testimonials__text__role3").classList.remove("testimonials__text__role__light");
//         document.getElementById("testimonials__text__role3").classList.add("testimonials__text__role__dark");
//     }
//     else {
//         document.getElementById("testimonials__text__role3").classList.add("testimonials__text__role__light");
//         document.getElementById("testimonials__text__role3").classList.remove("testimonials__text__role__dark");
//     }

//     if (document.getElementById("contact__icon__item1").classList.contains("contact__icon__item__light")) {
//         document.getElementById("contact__icon__item1").classList.remove("contact__icon__item__light");
//         document.getElementById("contact__icon__item1").classList.add("contact__icon__item__dark");
//     }
//     else {
//         document.getElementById("contact__icon__item1").classList.add("contact__icon__item__light");
//         document.getElementById("contact__icon__item1").classList.remove("contact__icon__item__dark");
//     }

//     if (document.getElementById("contact__icon__item2").classList.contains("contact__icon__item__light")) {
//         document.getElementById("contact__icon__item2").classList.remove("contact__icon__item__light");
//         document.getElementById("contact__icon__item2").classList.add("contact__icon__item__dark");
//     }
//     else {
//         document.getElementById("contact__icon__item2").classList.add("contact__icon__item__light");
//         document.getElementById("contact__icon__item2").classList.remove("contact__icon__item__dark");
//     }

//     if (document.getElementById("contact__icon__item3").classList.contains("contact__icon__item__light")) {
//         document.getElementById("contact__icon__item3").classList.remove("contact__icon__item__light");
//         document.getElementById("contact__icon__item3").classList.add("contact__icon__item__dark");
//     }
//     else {
//         document.getElementById("contact__icon__item3").classList.add("contact__icon__item__light");
//         document.getElementById("contact__icon__item3").classList.remove("contact__icon__item__dark");
//     }

//     if (document.getElementById("contact__icon__item4").classList.contains("contact__icon__item__light")) {
//         document.getElementById("contact__icon__item4").classList.remove("contact__icon__item__light");
//         document.getElementById("contact__icon__item4").classList.add("contact__icon__item__dark");
//     }
//     else {
//         document.getElementById("contact__icon__item4").classList.add("contact__icon__item__light");
//         document.getElementById("contact__icon__item4").classList.remove("contact__icon__item__dark");
//     }

//     if (document.getElementById("email__input").classList.contains("email__input__light")) {
//         document.getElementById("email__input").classList.remove("email__input__light");
//         document.getElementById("email__input").classList.add("email__input__dark");
//     }
//     else {
//         document.getElementById("email__input").classList.add("email__input__light");
//         document.getElementById("email__input").classList.remove("email__input__dark");
//     }

// }


document.getElementById("navbar__icon").onclick = function () {
    document.getElementById('search__bar').classList.toggle('dark');
    document.getElementById('about').classList.toggle('dark');
    document.getElementById('categories').classList.toggle('dark');
    document.getElementById('menu').classList.toggle('dark');
    document.getElementById('jumping').classList.toggle('dark');
    document.getElementById('video').classList.toggle('dark');
    document.getElementById('blog').classList.toggle('dark');
}