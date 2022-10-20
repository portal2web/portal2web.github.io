const backgrounds = [
    "portal2-menu-act01.png",
    "portal2-menu-act02.png",
    "portal2-menu-act03.png",
    "portal2-menu-act04.png",
    "portal2-menu-act05.png"
];

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

function get_random(array) {
    return array[Math.floor((Math.random()*array.length))];
}

document.addEventListener("DOMContentLoaded", () => {
    if(backgrounds.includes(params.background) == false) {
        window.location.href = "menu.html?background=" + get_random(backgrounds);
    } 
    document.querySelector("body").style.backgroundImage = `url("/assets/image/` + params.background + `")`;
});

function gotoBackground() {
    window.location.href='background.html?background=' + params.background;
}

function gotoCannotPlay() {
    window.location.href='aperture.html?redirect=dialog.html?title=INFO%26body=HA! you thought you could play! LOL! Anyway, you cannot play p2web yet.%26redirect=menu.html?background=' + params.background + '%26background=' + params.background;
}