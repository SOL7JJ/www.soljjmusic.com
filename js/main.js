document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".social-media-icons a");

  links.forEach((a) => {
    a.addEventListener("click", () => {
      console.log(`Navigating to: ${a.href}`);
    });
  });
});
