import Hero from "../components/Hero";
import Special from "../components/Special";
import special1 from "../images/specials/s-1-tiramisu-Cake.jpg";
import special2 from "../images/specials/s-2-cioppino.webp";
import special3 from "../images/specials/s-3-stracotto-di-fassona-piemontese.webp";
import special4 from "../images/specials/s-4-Pistachio-Gelato.webp";
import special5 from "../images/specials/s-5--zabaglione.webp";
import special6 from "../images/specials/s-6-Almond-Tart.webp";
import Comments from "../components/Comments";

const data = [
  {
    name: "Tiramisu",
    price: "$7.75",
    image: special1,
    description:
      "Coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder layers.",
  },
  {
    name: "Cioppino",
    price: "$11.35",
    image: special2,
    description:
      "Shellfish like crab, squid, and mussels simmered in a tomato and wine broth",
  },
  {
    name: "Stracotto di Fassona",
    price: "$13.30",
    image: special3,
    description:
      "Slow-braised in red wine until tender, a classic of Piedmontese cuisine.",
  },
  {
    name: "Pistachio Stracciatella Gelato",
    price: "$6.75",
    image: special4,
    description:
      "More milk, less air from slower churning, and lower fat, which intensifies flavors..",
  },
  {
    name: "Zabaglione with Strawberries",
    price: "$8.55",
    image: special5,
    description: "A sweet custard spiked with marsala wine.",
  },
  {
    name: "Italian Almond Tart",
    price: "$5.25",
    image: special6,
    description:
      "This rustic dessert is from the Lombardy region of Northern Italy.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Comments />
    </>
  );
}
