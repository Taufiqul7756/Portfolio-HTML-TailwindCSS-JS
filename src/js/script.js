document.addEventListener("DOMContentLoaded", function () {
  // Initial category to display
  const initialCategory = "all";
  showCategory(initialCategory);

  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataArray = Array.from(formData).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

    console.log(formDataArray);
    form.reset();
  });
});

function showAll() {
  const prevActiveItem = document.querySelector(".nav-item.active");
  if (prevActiveItem) {
    prevActiveItem.classList.remove("active");
  }
  showCategory("all");
}

function showCategory(category) {
  // Clear existing images
  const imageDisplay = document.getElementById("imageDisplay");
  imageDisplay.innerHTML = "";

  // Fetch data from JSON file
  fetch("/src/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Filter images based on the selected category
      const filteredData =
        category === "all"
          ? data
          : data.filter((item) => item.category === category);

      // Display images
      filteredData.forEach((item) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("relative", "overflow-hidden");

        const imgElement = document.createElement("img");
        imgElement.src = item.img;
        imgElement.alt = "Image";
        imgElement.classList.add(
          "h-auto",
          "transition-opacity",
          "duration-300",
          "hover:opacity-30",
          "cursor-pointer"
        );

        const overlay = document.createElement("div");
        overlay.classList.add(
          "absolute",
          "top-0",
          "left-0",
          "bg-gray-300",
          "opacity-0",

          "transition-opacity",
          "duration-300"
        );

        imgElement.addEventListener("mouseenter", () => {
          overlay.classList.remove("opacity-0");
        });

        imgElement.addEventListener("mouseleave", () => {
          overlay.classList.add("opacity-0");
        });

        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(overlay);
        imageDisplay.appendChild(imageContainer);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  // Add "active" class to the clicked item
  const currentItem = document.querySelector(
    `.nav-item[data-category='${category}']`
  );
  if (currentItem) {
    const prevActiveItem = document.querySelector(".nav-item.active");
    if (prevActiveItem) {
      prevActiveItem.classList.remove("active");
    }
    currentItem.classList.add("active");
  }
}
