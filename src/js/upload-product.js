/* eslint-disable quote-props */
/* eslint-disable quotes */
function show() {
  const archivo = document.getElementById("file").files[0];
  const reader = new FileReader();
  // eslint-disable-next-line no-undef
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      console.log(reader.result);
      document.getElementById("img").src = reader.result;
    };
  }
}

const termsConditions = document.querySelector("#terms");
termsConditions.addEventListener("change", (e) => e.preventDefault());

const btnSubmit = document.querySelector(".btn");
btnSubmit.addEventListener("click", sendForm);

class Product {
  constructor(title, description, picture) {
    (this.title = title),
      (this.description = description),
      (this.picture = picture),
      (this.availability = "Disponible");
  }
}

function sendForm() {
  const img = document.getElementById("img").src;
  const megaTitle = document.getElementById("product-title").value;
  const megaDescription = document.getElementById("text-upload").value;

  const product = new Product();

  product.picture = img;
  product.title = megaTitle;
  product.description = megaDescription;

  const classes = {
    card: "product-card",
    paragraph: "has-text-weight-bold",
    description: "has-text-left",
    availability: "green",
    text: "text-product",
  };

  addProductToCatalog(product, classes);

  console.log(product);
}

function addProductToCatalog(product, classes) {
  const template = `
    <div class="${classes.card}">
      <img src="${product.picture}" alt="${product.title}">
      <div class="${classes.text}">
        <p class="${classes.availability}">${product.availability}</p>
        <p class="${classes.paragraph}">${product.title}</p>
        <p class="${classes.description}">${product.description}</p>
      </div>
    </div>
  `;

  const catalog = document.querySelector("#producto");
  catalog.insertAdjacentHTML("beforeEnd", template);
}

// como guardar datos recogidos del form y hacer un json con ellos
