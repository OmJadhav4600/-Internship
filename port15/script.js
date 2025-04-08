// Sample Job Data (can be replaced with an API)
const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "New York",
    category: "IT",
    experience: "Mid-Level",
    description: "We are looking for a skilled Frontend Developer to join our team. You will work on cutting-edge projects using modern technologies like React and Node.js."
  },
  {
    title: "Marketing Manager",
    company: "Creative Agency",
    location: "San Francisco",
    category: "Marketing",
    experience: "Senior",
    description: "We need an experienced Marketing Manager to lead our campaigns. You will be responsible for developing and executing marketing strategies."
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "Remote",
    category: "Design",
    experience: "Fresher",
    description: "Join us as a UI/UX Designer and create amazing user experiences. You will work closely with our product team to design intuitive interfaces."
  }
];

// Function to render job cards
function renderJobs(jobs) {
  const jobListings = document.getElementById("job-listings");
  jobListings.innerHTML = jobs.map((job, index) => `
    <div class="col-md-4">
      <div class="job-card">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Category:</strong> ${job.category}</p>
        <p><strong>Experience:</strong> ${job.experience}</p>
        <p>${job.description}</p>
        <button class="btn btn-primary" onclick="openModal(${index})">View More</button>
      </div>
    </div>
  `).join("");
}

// Function to open modal with job details
function openModal(index) {
  const job = jobs[index];
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = `
    <h4>${job.title}</h4>
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Category:</strong> ${job.category}</p>
    <p><strong>Experience:</strong> ${job.experience}</p>
    <p><strong>Description:</strong> ${job.description}</p>
  `;

  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById("jobModal"));
  modal.show();
}

// Filter functionality
document.getElementById("search-bar").addEventListener("input", filterJobs);
document.getElementById("location-filter").addEventListener("change", filterJobs);
document.getElementById("category-filter").addEventListener("change", filterJobs);
document.getElementById("experience-filter").addEventListener("change", filterJobs);

function filterJobs() {
  const searchText = document.getElementById("search-bar").value.toLowerCase();
  const location = document.getElementById("location-filter").value;
  const category = document.getElementById("category-filter").value;
  const experience = document.getElementById("experience-filter").value;

  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchText) &&
      (location === "" || job.location === location) &&
      (category === "" || job.category === category) &&
      (experience === "" || job.experience === experience)
    );
  });

  renderJobs(filteredJobs);
}

// Reset filters
document.getElementById("reset-filters").addEventListener("click", () => {
  document.getElementById("search-bar").value = "";
  document.getElementById("location-filter").value = "";
  document.getElementById("category-filter").value = "";
  document.getElementById("experience-filter").value = "";
  renderJobs(jobs);
});

// Initial render
renderJobs(jobs);