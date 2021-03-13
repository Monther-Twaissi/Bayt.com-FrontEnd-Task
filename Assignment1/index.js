/**
 * Show and hide mobile nav-menu
 */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/**
 * Adding the scroll functionality to the scroll buttons
 */
const btn = document.querySelector(".scroll"); // Select the targeted element
btn.addEventListener("click", () =>
  // Adding an event listener to the target
  window.scrollTo({
    // Set the scroll point coordinate and the scrolling behavior
    top: 0,
    behavior: "smooth",
  })
);

const workBtn = document.getElementById("work");
workBtn.addEventListener("click", () =>
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  })
);
const contactBtn = document.getElementById("contact");
contactBtn.addEventListener("click", () =>
  window.scrollTo({
    top: 1400,
    behavior: "smooth",
  })
);
