document.getElementById("navbar__icon").onclick = function () {
    if (document.getElementById("mode__switch").classList.contains("fa-moon")) {
        document.getElementById("mode__switch").classList.remove("fa-moon");
        document.getElementById("mode__switch").classList.add("fa-sun");
    }
    else {
        document.getElementById("mode__switch").classList.add("fa-moon");
        document.getElementById("mode__switch").classList.remove("fa-sun");
    }
    
    document.getElementById('search__bar').classList.toggle('dark');
    document.getElementById('about').classList.toggle('dark');
    document.getElementById('categories').classList.toggle('dark');
    document.getElementById('menu').classList.toggle('dark');
    document.getElementById('jumping').classList.toggle('dark');
    document.getElementById('video').classList.toggle('dark');
    document.getElementById('blog').classList.toggle('dark');
    document.getElementById('testimonials').classList.toggle('dark');
    document.getElementById('footer').classList.toggle('dark');
}