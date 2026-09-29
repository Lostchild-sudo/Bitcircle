"use strict";

const items = document.querySelectorAll(".profile-items .item");

const navigationIcons = document.querySelectorAll(
    ".profile-nav button"
);

function showProfileItem(itemId) {

    items.forEach((item) => {
        item.classList.remove("active");
    });

    navigationIcons.forEach((button) => {
        button.classList.remove("active");
    });

    const selectedItem = document.getElementById(itemId);

    const selectedIcon = document.querySelector(
        `.profile-nav button[data-item="${itemId}"]`
    );

    if (selectedItem) {
        selectedItem.classList.add("active");
    }

    if (selectedIcon) {
        selectedIcon.classList.add("active");
    }
}

navigationIcons.forEach((button) => {

    button.addEventListener("click", () => {

        const itemId = button.dataset.item;

        showProfileItem(itemId);

    });

});

showProfileItem("post-grid");
