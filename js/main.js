document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Header Links
  let toggle = document.querySelector(".toggle-menu");
  let links = document.querySelector(".toggle-menu + ul");
  toggle.addEventListener("click", () => {
    links.classList.toggle("links");
  });

  // Hide menu when clicking outside  of the menu
  

  // Our Works Filter
  document.querySelectorAll(".filter li").forEach((li) => {
    li.addEventListener("click", function () {
      // Remove active class from all items
      document.querySelectorAll(".filter li").forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");

      // Hide all boxes
      document.querySelectorAll(".box").forEach((box) => {
        box.style.display = "none";
      });

      // Show selected items
      const selector = this.dataset.select;
      document.querySelectorAll(selector).forEach((item) => {
        item.style.display = "block";
      });
    });
  });
});
