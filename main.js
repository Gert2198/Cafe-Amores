const menuData = {
  Clásicas: [
    {
      name: "La clásica",
      img: "images/Jamon y tomate.png",
      ingredients: ["Tomate", "Jamón serrano", "Aceite", "Sal"],
      variations: [
        {
          title: "De papá",
          extraIngredients: ["Tomate restregado", "Trozos de tomate en dudosas condiciones"],
        },
        {
          title: "De Sofía",
          extraIngredients: ["Tomate restregado", "Orégano"],
        },
      ],
    },
    {
      name: "Un rapidín",
      img: "images/Aguacate y queso cottage.png",
      ingredients: ["Aguacate", "Queso cottage", "Pimienta (en abundancia)"],
    },
    {
      name: "Hoy me siento pepino",
      img: "images/Hoy me siento pepino.png",
      ingredients: [
        "Pepino en rodajas",
        "Queso cottage",
        "Aceite",
        "Limón",
        "Sal", 
        "Pimienta"
      ],
      variations: [
        {
          title: "Hoy me siento pepinazo",
          extraIngredients: ["Pepino crunchy (se reemplaza el pan por pepino con corteza)"],
        }
      ],
    },
    {
      name: "La completa",
      img: "images/La completa.png",
      ingredients: [
        "Aguacate",
        "Tomate",
        "Jamón cocido",
        "Orégano",
        "Romero"
      ],
    },
    {
      name: "La ladrona",
      img: "images/La ladrona.png",
      ingredients: [
        "Aguacate",
        "Tomate",
        "Salmón ahumado",
        "Eneldo"
      ],
    },
    {
      name: "La herencia",
      img: "images/La herencia.png",
      ingredients: [
        "Aguacate",
        "Jamón serrano",
        "Pimienta (MUCHA)"
      ],
    },
    {
      name: "El tupper de sobras",
      img: "images/El tupper de sobras.png",
      ingredients: [
        "Aguacate",
        "Queso curado"
      ],
      variations: [
        {
          title: "Nita",
          extraIngredients: ["Calentita con queso fundido"],
        },
        {
          title: "Fita",
          extraIngredients: ["Nunca es demasiado queso (+2 trozos de queso en el plato)"],
        },
      ],
    },
  ],
  Especiales: [
    {
      name: "La 2008",
      img: "images/La 2008.png",
      ingredients: [
        "Aguacate", 
        "Huevo revuelto a baja temperatura", 
        "Mucho queso"
      ],
      variations: [
        {
          title: "La 2004",
          extraIngredients: ["Queso feta añadido al huevo"],
        },
        {
          title: "Italiana",
          extraIngredients: ["Parmesano añadido al huevo"],
        },
      ],
    },
    {
      name: "La 1973",
      img: "images/La 1973.png",
      ingredients: [
        "Aguacate", 
        "Queso cottage", 
        "Salmón"
      ],
    },
    {
      name: "La 1972",
      img: "images/La 1972.png",
      ingredients: [
        "Pimiento de piquillo", 
        "Atún"
      ],
    },
    {
      name: "La interraíl",
      img: "images/La interraíl.png",
      ingredients: [
        "Hummus", 
        "Pepino en rodajas", 
        "Jamón cocido"
      ],
    },
    {
      name: "La pizza",
      img: "images/La pizza.png",
      ingredients: [
        "Pesto", 
        "Queso fundido", 
        "Jamón serrano"
      ],
    },
    {
      name: "La erasmus",
      img: "images/La erasmus.png",
      ingredients: [
        "Aguacate", 
        "Alcaparras", 
        "Jamón cocido"
      ],
    },
  ],
  Olvidadas: [
    {
      name: "La cardiólogo",
      img: "images/La cardiólogo.png",
      ingredients: [
        "Aguacate", 
        "Queso feta"
      ], 
    },
    {
      name: "La bombastic",
      img: "images/La bombastic.png",
      ingredients: [
        "Pisto", 
        "Atún"
      ],
    },
    {
      name: "La científica loca",
      img: "images/La científica loca.png",
      ingredients: [
        "Hummus", 
        "Pimiento de piquillo", 
        "Queso feta"
      ],
    },
  ],
};

const customIngredients = [
  "Pan",
  "Jamón serrano",
  "Tomate",
  "Aguacate",
  "Pepino",
  "Jamón cocido",
  "Salmón ahumado",
  "Queso curado",
  "Huevo revuelto",
  "Pimiento",
  "Atún",
  "Alcaparras",
];


let lastCategory = "";
let isShown = false;

function showCategory(category) {
  const cartaDiv = document.getElementById("Carta");
  
  if (lastCategory === category && isShown) {
    console.log("Entro aqui");
    cartaDiv.style.display = "none"; 
    isShown = false;
    return;
  }

  const title = document.getElementById("category-title");
  const contentDiv = document.getElementById("category-content");

  title.textContent = category;
  contentDiv.innerHTML = "";
  

  menuData[category].forEach((item) => {
    const tostadaDiv = document.createElement("div");
    tostadaDiv.classList.add("tostada");

    const ingredientsList = item.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");

    let variationsContent = "";
    if (item.variations) {
      variationsContent = item.variations
        .map(
          (variation) => `
            <details>
              <summary>${variation.title}</summary>
              <ul>
                ${variation.extraIngredients
                  .map((extra) => `<li>${extra}</li>`)
                  .join("")}
              </ul>
            </details>
          `
        )
        .join("");
    }

    tostadaDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <details>
        <summary>Ingredientes</summary>
        <ul>${ingredientsList}</ul>
        ${variationsContent}
      </details>
    `;
    contentDiv.appendChild(tostadaDiv);
  });

  cartaDiv.style.display = "block";

  lastCategory = category;
  isShown = true;
}

function showIngredientsCarousel() {
  const carousel = document.getElementById("ingredients-carousel");

  // Vaciar el carrusel si ya tiene contenido
  carousel.innerHTML = "";

  customIngredients.forEach((ingredient) => {
    const ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add("ingredient-item");

    ingredientDiv.innerHTML = `
      <img src="images/ingredients/${ingredient}.png" alt="${ingredient}">
      <p>${ingredient}</p>
    `;
    carousel.appendChild(ingredientDiv);
  });
}

function startCarousel() {
  const carousel = document.getElementById("ingredients-carousel");
  
  let scrollAmount = 0;
  let scrollDirection = 1; // 1 para avanzar, -1 para retroceder
  const scrollSpeed = 1; // Velocidad del desplazamiento
  const scrollInterval = 20; // Intervalo en milisegundos

  setInterval(() => {
    // Actualiza el desplazamiento
    scrollAmount += scrollSpeed * scrollDirection;
    carousel.scrollLeft = scrollAmount;

    // Verifica si llegó al final o al inicio
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
      scrollDirection = -1; // Cambia de dirección al llegar al final
    } else if (carousel.scrollLeft <= 0) {
      scrollDirection = 1; // Cambia de dirección al llegar al inicio
    }
  }, scrollInterval);
}

// Llamar a las funciones al cargar la página
showIngredientsCarousel();
startCarousel();