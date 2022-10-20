const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

document.querySelector(".aperturelogo").addEventListener("animationend", () => {
    window.location.href = params.redirect;
})