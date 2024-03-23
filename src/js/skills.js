fetch("./src/data/skills.json")
  .then((response) => response.json())
  .then((data) => {
    const skillsContainer = document.getElementById("skillsContainer");
    data.forEach((skill) => {
      const skillDiv = document.createElement("div");
      skillDiv.className = "flex justify-between items-center mb-3 mt-5";

      const skillNameSpan = document.createElement("span");
      skillNameSpan.className = "text-white";
      skillNameSpan.textContent = skill.skill;

      const skillPercentageSpan = document.createElement("span");
      skillPercentageSpan.className = "text-white";
      skillPercentageSpan.textContent = skill.percentage + "%";

      skillDiv.appendChild(skillNameSpan);
      skillDiv.appendChild(skillPercentageSpan);

      const progressBarContainer = document.createElement("div");
      progressBarContainer.className =
        "progress-bar-custom-widthMax h-3 rounded-full";
      progressBarContainer.style.backgroundColor = "#5a3f1d";

      const progressBar = document.createElement("div");
      progressBar.className = "h-full rounded-full";
      progressBar.style.backgroundColor = "#f89323";
      progressBar.style.width = skill.percentage + "%";

      progressBarContainer.appendChild(progressBar);

      const skillContainer = document.createElement("div");
      skillContainer.className = "grid items-center justify-start mb-4";
      skillContainer.appendChild(skillDiv);
      skillContainer.appendChild(progressBarContainer);

      skillsContainer.appendChild(skillContainer);
    });
  })
  .catch((error) => console.error("Error fetching skills:", error));
