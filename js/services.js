function showService(contentId, leftImageSrc) {
    const allContent = document.querySelectorAll(".services-type");
    allContent.forEach(section => {
        section.style.display = "none";
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = "block";

    document.getElementById("serviceButtons").style.display = "none";
    document.getElementById("backToServices").style.display = "block";

    const img = document.getElementById("overlay-left-img");
    img.style.transition = "opacity 0.2s ease-in-out";
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = leftImageSrc;
        img.onload = () => {
            img.style.opacity = 1;
        };
    }, 200);

    document.getElementById("container").classList.add("right-panel-active");
}

function goBackToServices() {
    const img = document.getElementById("overlay-left-img");
    img.style.transition = "opacity 0.3s ease-in-out";
    img.style.opacity = 0;

    document.getElementById("container").classList.remove("right-panel-active");

    setTimeout(() => {
        img.src = "pics/default_pic.png";
        img.onload = () => {
            img.style.opacity = 1;
        };

        const allContent = document.querySelectorAll(".services-type");
        allContent.forEach(section => {
            section.style.display = "none";
        });

        document.getElementById("serviceButtons").style.display = "block";
        document.getElementById("backToServices").style.display = "none";
    }, 300);
}

window.onload = function () {
    const allContent = document.querySelectorAll(".services-type");
    allContent.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById("serviceButtons").style.display = "block";
    document.getElementById("backToServices").style.display = "none";
};
