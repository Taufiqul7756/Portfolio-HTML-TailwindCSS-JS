fetch("./src/data/intro.json")
  .then((response) => response.json())
  .then((data) => {
    const introSection = document.getElementById("introSection");
    data.forEach((intro) => {
      const introduction = `
      <h2 class="text-yellow-400 font-bold text-xs mt-5">INTRODUCTION</h2>
      <p class="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-white">${intro.firstLineTitle}</p>
      <p class="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-white">${intro.secondLineTitle}</p>
      <p class="mt-2">${intro.age} years /  ${intro.name} / ${intro.location}</p>
      <p class="mt-5 text-gray-300">${intro.des}</p>
      
      <button class="rounded-full font-bold bg-yellow-400 hover:bg-yellow-600 px-4 py-1.5 mt-10 text-md">Download CV <i class="fa-solid fa-download"></i></button>
    `;
      introSection.innerHTML = introduction;
    });
  })
  .catch((error) => console.error("Error fetching introduction data:", error));
