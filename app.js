"use strict";

const pages = document.querySelectorAll(".app-container>.page-section");

const navigationButtons = document.querySelectorAll(".bottom-nav button");

const profileButton = document.querySelector(".profile-btn");
const profileAvatar = document.querySelector(".navProfile-avatar");
const navAvatarHead = document.querySelector(".navAvatar-head");
const navAvatarBody = document.querySelector(".navAvatar-body");


function showPage(pageId) {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    navigationButtons.forEach((button) => {
        button.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    const selectedButton = document.querySelector(
        `.bottom-nav button[data-page="${pageId}"]`
    );

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    if (selectedButton) {
        selectedButton.classList.add("active");
    }


    /*
     * Profile avatar
     */

    if (pageId === "profile") {

        profileAvatar.classList.add("change");
        navAvatarHead.classList.add("change");
        navAvatarBody.classList.add("change");

    } else {

        profileAvatar.classList.remove("change");
        navAvatarHead.classList.remove("change");
        navAvatarBody.classList.remove("change");

    }

}


navigationButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const pageId = button.dataset.page;

        showPage(pageId);

    });

});


showPage("home");
