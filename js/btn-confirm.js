const contactData = document.querySelector(".message-change");
const btnData = document.querySelector(".btn-agreed");

btnData.addEventListener("click", () => {
    const visibility = contactData.getAttribute("data-message");
    if (visibility === "false") {
        contactData.setAttribute("data-message", true);
    }
});