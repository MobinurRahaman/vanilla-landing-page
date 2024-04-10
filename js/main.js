document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const formValues = Object.fromEntries(formData.entries());
  console.log("Form Data:", formValues);
});

// Dummy services data
const servicesData = [
  {
    title: "Computer Hardware",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam!",
    icon: "phone_iphone",
    url: "#",
    image: "https://source.unsplash.com/random/?services&1",
  },
  {
    title: "Mobile Repair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam!",
    icon: "phone_iphone",
    url: "#",
    image: "https://source.unsplash.com/random/?services&2",
  },
  {
    title: "Laptop Repair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam!",
    icon: "phone_iphone",
    url: "#",
    image: "https://source.unsplash.com/random/?services&3",
  },
  {
    title: "Operating System Install",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam!",
    icon: "phone_iphone",
    url: "#",
    image: "https://source.unsplash.com/random/?services&4",
  },
  {
    title: "Backup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam!",
    icon: "phone_iphone",
    url: "#",
    image: "https://source.unsplash.com/random/?services&5",
  },
  {
    title: "Point of Sales",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam!",
    icon: "phone_iphone",
    url: "#",
    image: "https://source.unsplash.com/random/?services&6",
  },
];

function generateServiceCards() {
  const container = document.querySelector(".services-card-container");

  servicesData.forEach((service) => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    const header = document.createElement("div");
    header.classList.add("service-card-header");

    const iconSpan = document.createElement("span");
    iconSpan.classList.add("icon", "material-symbols-outlined");
    iconSpan.textContent = service.icon;

    const title = document.createElement("h3");
    title.textContent = service.title;

    const body = document.createElement("div");
    body.classList.add("service-card-body");

    const description = document.createElement("p");
    description.textContent = service.description;

    const arrowSpan = document.createElement("span");
    arrowSpan.classList.add("arrow", "material-symbols-outlined");
    arrowSpan.textContent = "north_east";

    const overlay = document.createElement("div");
    overlay.classList.add("service-card-overlay");
    overlay.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${service.image})`;

    const overlayTitle = document.createElement("h3");
    overlayTitle.textContent = service.title;

    const overlayDescription = document.createElement("p");
    overlayDescription.textContent = service.description;

    // Append elements
    header.appendChild(iconSpan);
    header.appendChild(title);

    body.appendChild(description);
    body.appendChild(arrowSpan);

    overlay.appendChild(overlayTitle);
    overlay.appendChild(overlayDescription);

    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(overlay);

    container.appendChild(card);
  });
}

generateServiceCards();
