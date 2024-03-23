fetch("./src/data/pricing.json")
  .then((response) => response.json())
  .then((data) => {
    const pricingCardsContainer = document.getElementById("pricingCards");

    data.forEach((option) => {
      const card = document.createElement("div");
      card.classList.add("bg-black", "text-white");

      const categoryPrice = document.createElement("div");
      categoryPrice.classList.add(
        "inline-block",
        "flex",
        "items-center",
        "justify-center",

        "p-2",
        "mb-4",
        "mt-5"
      );

      // Apply rounded border only to the right side
      categoryPrice.style.backgroundImage =
        "linear-gradient(135deg, #F5BD4D, #C98909)";
      categoryPrice.style.borderTopLeftRadius = "0";
      categoryPrice.style.borderBottomLeftRadius = "0";
      categoryPrice.style.borderTopRightRadius = "1rem";
      categoryPrice.style.borderBottomRightRadius = "1rem";
      categoryPrice.style.display = "inline-block";
      categoryPrice.innerHTML = `<span class="font-bold ">${option.category}</span>`;
      card.appendChild(categoryPrice);

      const price = document.createElement("div");
      price.classList.add("text-start", "font-bold", "px-5");

      const priceText = document.createElement("span");
      priceText.classList.add("text-4xl");
      priceText.textContent = `$${option.price}`;

      const monthText = document.createElement("span");
      monthText.classList.add("text-xl");
      monthText.textContent = " / month";

      price.appendChild(priceText);
      price.appendChild(monthText);

      card.appendChild(price);

      const offers = document.createElement("div");
      offers.classList.add("mt-6", "grid", "gap-2", "p-5");

      const offerList = document.createElement("ul");
      offerList.classList.add("text-white", "bg-gray-800", "p-3");

      option.openOffer.forEach((offer) => {
        const offerItem = document.createElement("li");
        offerItem.textContent = offer;
        offerList.appendChild(offerItem);
      });

      option.closeOffer.forEach((offer, index) => {
        const offerItem = document.createElement("li");
        offerItem.textContent = offer;
        if (index !== 0) {
          offerItem.classList.add("line-through");
        }
        offerList.appendChild(offerItem);
      });

      offers.appendChild(offerList);
      card.appendChild(offers);

      const button = document.createElement("button");
      button.classList.add(
        "mt-6",
        "ml-5",
        "mb-10",
        "px-6",
        "py-3",
        "rounded-xl",
        "border",
        "border-yellow-500",
        "bg-black",
        "font-bold",
        "hover:bg-yellow-500",
        "hover:text-white",
        "text-yellow-500"
      );

      button.textContent = "Get Started";
      card.appendChild(button);

      pricingCardsContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching pricing data:", error));
