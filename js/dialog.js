const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

document.querySelector(".dialog-title").textContent = params.title;
document.querySelector(".dialog-body").textContent = params.body;

function back() {
    window.location.href = params.redirect;
}

const backgrounds = [
    "portal2-menu-act01.png",
    "portal2-menu-act02.png",
    "portal2-menu-act03.png",
    "portal2-menu-act04.png",
    "portal2-menu-act05.png"
];

function get_random(array) {
    return array[Math.floor((Math.random()*array.length))];
}

document.addEventListener("DOMContentLoaded", () => {
    if(backgrounds.includes(params.background) == false) {
        window.location.href = "menu.html?background=" + get_random(backgrounds);
    } 
    document.querySelector("body").style.backgroundImage = `url("/assets/image/` + params.background + `")`;
});