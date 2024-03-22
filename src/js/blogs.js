fetch("/src/data/blogs.json")
  .then((response) => response.json())
  .then((data) => {
    const blogPostsContainer = document.getElementById("blogPosts");

    // Loop over each blog post in the data array
    data.forEach((post) => {
      // Create HTML elements for each blog post
      const postElement = document.createElement("div");
      postElement.classList.add("p-4", "rounded", "bg-black", "text-white");

      const imageElement = document.createElement("img");
      imageElement.src = post.img;
      imageElement.alt = "Blog Post Image";
      imageElement.classList.add(
        "lg:w-full",
        "lg:h-64",
        "mb-4",
        "md:h-52",
        "md:w-52",
        "sm:w-32",
        "sm:h-32"
      );

      const categoryDateElement = document.createElement("div");
      categoryDateElement.classList.add(
        "flex",
        "justify-start",
        "gap-5",
        "text-white",
        "text-gray-500",
        "mb-5"
      );
      categoryDateElement.innerHTML = `<span>${post.category}</span> | <span class="">${post.date}</span>`;

      const titleElement = document.createElement("h2");
      titleElement.textContent = post.title;
      titleElement.classList.add("font-bold", "text-2xl", "mb-5");

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = post.des;
      descriptionElement.classList.add("text-gray-400");

      const authorElement = document.createElement("div");
      authorElement.textContent = `- Posted By ${post.author} -`;
      authorElement.classList.add("text-start", "mt-4");

      // Append elements to post container
      postElement.appendChild(imageElement);
      postElement.appendChild(categoryDateElement);
      postElement.appendChild(titleElement);
      postElement.appendChild(descriptionElement);
      postElement.appendChild(authorElement);

      // Append post container to blog posts container
      blogPostsContainer.appendChild(postElement);
    });
  })
  .catch((error) => console.error("Error fetching blog posts:", error));
