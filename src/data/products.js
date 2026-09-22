import product01 from "../assets/images/products/product-01.png";
import product02 from "../assets/images/products/product-02.png";
import product03 from "../assets/images/products/product-03.png";
import product04 from "../assets/images/products/product-04.png";
import product05 from "../assets/images/products/product-05.png";
import product06 from "../assets/images/products/product-06.png";

const products = [
  {
    id: 1,
    name: "Honey Lattice Bread",
    shortName: "Honey Lattice",
    price: 40,
    image: product01,
    category: "Pastry",
    description:
      "A crisp golden lattice pastry with a soft center and a lightly sweet finish.",
    ingredients: "Flour, butter, honey, milk and natural yeast.",
  },
  {
    id: 2,
    name: "Berry Danish",
    shortName: "Berry Danish",
    price: 40,
    image: product02,
    category: "Pastry",
    description:
      "Flaky golden pastry finished with fresh berries and a smooth vanilla cream center.",
    ingredients: "Flour, butter, berries, vanilla cream and sugar.",
  },
  {
    id: 3,
    name: "Seeded Artisan Loaf",
    shortName: "Seeded Loaf",
    price: 40,
    image: product03,
    category: "Bread",
    description:
      "A rustic artisan loaf with a crisp crust and a generous mix of roasted seeds.",
    ingredients: "Whole grain flour, seeds, sea salt, water and yeast.",
  },
  {
    id: 4,
    name: "Rustic Country Bread",
    shortName: "Country Bread",
    price: 40,
    image: product04,
    category: "Bread",
    description:
      "Traditional country bread with a flour-dusted crust and a soft, airy interior.",
    ingredients: "Wheat flour, water, natural starter and sea salt.",
  },
  {
    id: 5,
    name: "Golden Sharing Bread",
    shortName: "Sharing Bread",
    price: 40,
    image: product05,
    category: "Bread",
    description:
      "A beautifully scored golden bread designed for sharing around the table.",
    ingredients: "Flour, butter, sesame, milk and yeast.",
  },
  {
    id: 6,
    name: "Sesame Swirl Roll",
    shortName: "Sesame Roll",
    price: 40,
    image: product06,
    category: "Bread",
    description:
      "A soft handcrafted roll topped with toasted sesame and baked until golden.",
    ingredients: "Flour, milk, sesame, butter and yeast.",
  },
];

export default products;