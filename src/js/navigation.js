document.addEventListener("DOMContentLoaded", function () {
  // Get the icon elements
  var homeIcon = document.getElementById("homeRedirectIcon");
  var resumeIcon = document.getElementById("redirectIcon");
  var contactIcon = document.getElementById("contactRedirectIcon");
  var blogIcon = document.getElementById("blogsRedirectIcon");
  var portfolioIcon = document.getElementById("portfolioRedirectIcon");

  // Add click event listener for home icon
  homeIcon.addEventListener("click", function () {
    // Scroll smoothly to the contact section
    document.getElementById("homeSection").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Add click event listener for resume icon
  resumeIcon.addEventListener("click", function () {
    // Scroll smoothly to the resume section
    document.getElementById("resume").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Add click event listener for contact icon
  contactIcon.addEventListener("click", function () {
    // Scroll smoothly to the contact section
    document.getElementById("contactSection").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Add click event listener for blog icon
  blogIcon.addEventListener("click", function () {
    // Scroll smoothly to the contact section
    document.getElementById("blogSection").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Add click event listener for skills icon
  portfolioIcon.addEventListener("click", function () {
    // Scroll smoothly to the contact section
    document.getElementById("portfolioSection").scrollIntoView({
      behavior: "smooth",
    });
  });
});
