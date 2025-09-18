const projects = [
  {
    title: "Skill Certification Portal",
    description: "An online platform for skill assessment and certification.",
    icon: "fa-solid fa-certificate",
    repoLink: "https://github.com/xortrtrt/FINAL-PROJECT-ADV-COM-PROG"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS, Bootstrap, and JavaScript to showcase skills and projects.",
    icon: "fa-solid fa-laptop-code",
    repoLink: "https://github.com/xortrtrt/Activity-4-Portfolio"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const col = document.createElement("div");
  col.className = "col-md-6";

  col.innerHTML = `
    <div class="card h-100 shadow-sm text-center p-3">
      <i class="${project.icon} fa-3x mb-3"></i>
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <div class="d-flex justify-content-center gap-2">
        <a href="#" class="btn btn-primary" target="_blank">Live Demo</a>
        <a href="${project.repoLink}" class="btn btn-dark" target="_blank"><i class="fab fa-github"></i> Repo</a>
      </div>
    </div>
  `;

  container.appendChild(col);
});

