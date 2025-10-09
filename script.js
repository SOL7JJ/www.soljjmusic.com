// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all social media icon links
  const socialIcons = document.querySelectorAll(".social-icon a");

  // Add an event listener to each icon
  socialIcons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
      // Log the name of the social media platform
      console.log(`Navigating to: ${this.href}`);
    });
  });

  // Add hover event to display tooltips with contact info
  const socialMediaIcons = document.querySelectorAll(".social-icon");

  socialMediaIcons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      const platform = this.getAttribute("data-platform");
      showTooltip(this, `Follow us on ${platform}`);
    });

    icon.addEventListener("mouseout", function () {
      hideTooltip();
    });
  });
});

// Function to show tooltip
function showTooltip(element, message) {
  let tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.innerText = message;
  document.body.appendChild(tooltip);

  const rect = element.getBoundingClientRect();
  tooltip.style.left =
    rect.left +
    window.scrollX +
    (element.offsetWidth - tooltip.offsetWidth) / 2 +
    "px";
  tooltip.style.top =
    rect.top + window.scrollY - tooltip.offsetHeight - 10 + "px";
}

// Function to hide tooltip
function hideTooltip() {
  const tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
}
