const currentPage = window.location.pathname.split("/").pop().toLowerCase();
const links = document.querySelectorAll(".nav-link");

const activeClasses = ["bg-primary", "text-white", "shadow-lg", "shadow-primary/25"];
const inactiveClasses = ["hover:bg-white/10"];

const isCurrentLink = (link) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") {
        return false;
    }

    const linkUrl = new URL(href, window.location.href);
    const linkPage = linkUrl.pathname.split("/").pop().toLowerCase();

    return linkPage === currentPage;
};

links.forEach((link) => {
    const active = isCurrentLink(link);

    link.classList.toggle("active", active);
    link.classList.toggle("transition-all", true);
    link.classList.toggle("duration-300", true);
    link.classList.toggle("scale-[1.02]", active);

    activeClasses.forEach((className) => link.classList.toggle(className, active));
    inactiveClasses.forEach((className) => link.classList.toggle(className, !active));

    if (active) {
        link.setAttribute("aria-current", "page");
    } else {
        link.removeAttribute("aria-current");
    }
});