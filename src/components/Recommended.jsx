import Card from "./Card";
import "./Recommended.css";
function Recommended() {
  const items = [
    {
      id: "1",
      company: "Java Haven",
      title: "Premium Arabica Coffee Beans",
      description:
        "Handpicked and roasted to perfection for a rich and aromatic brew.",
      price: 18.99,
      currency: "USD",
      image:
        "https://i0.wp.com/beewel.in/wp-content/uploads/2022/12/Arabica-Coffee-Beans-300-g-Front.jpg?fit=2000%2C2000&ssl=1",
      ratings: 4.9,
      reviews: 200,
      origin: "Ethiopia",
      roastLevel: "Medium",
      type: "Whole Bean",
    },
    {
      id: "2",
      company: "Tea Paradise",
      title: "Earl Grey Black Tea",
      description:
        "A classic blend of black tea infused with bergamot for a delightful flavor.",
      price: 12.49,
      currency: "USD",
      image:
        "https://i5.walmartimages.com/asr/c0384a64-ea31-4574-add1-8f343f9b2805.890499c4fed7824097b8df45982031ef.jpeg",
      ratings: 4.7,
      reviews: 150,
      type: "Loose Leaf",
      caffeineLevel: "Medium",
    },
    {
      id: "3",
      company: "CoffeeCo",
      title: "Single-Origin Colombian Coffee",
      description:
        "A smooth and bold coffee with hints of caramel and chocolate.",
      price: 16.75,
      currency: "USD",
      image:
        "https://www.jiomart.com/images/product/original/490503478/nescafe-classic-instant-coffee-95-g-product-images-o490503478-p490503478-0-202211141846.jpg?im=Resize=(420,420)",
      ratings: 4.8,
      reviews: 180,
      origin: "Colombia",
      roastLevel: "Dark",
      type: "Ground",
    },
    {
      id: "4",
      company: "TeaLeaf",
      title: "Jasmine Green Tea",
      description:
        "A fragrant and refreshing green tea scented with jasmine flowers.",
      price: 9.99,
      currency: "USD",
      image:
        "https://uk.ahmadtea.com/cdn/shop/products/20FJasmineRomanceface1.jpg?v=1632427526",
      ratings: 4.6,
      reviews: 120,
      type: "Loose Leaf",
      caffeineLevel: "Low",
    },
    {
      id: "5",
      company: "CoffeeBreak",
      title: "Brazilian Santos Coffee",
      description: "A smooth and nutty coffee with a hint of sweetness.",
      price: 14.25,
      currency: "USD",
      image:
        "https://ebenica.com/wp-content/uploads/2018/05/coffee-brasil-santos-970x970.jpg",
      ratings: 4.7,
      reviews: 160,
      origin: "Brazil",
      roastLevel: "Medium",
      type: "Whole Bean",
    },
    {
      id: "6",
      company: "TeaGarden",
      title: "Chamomile Herbal Tea",
      description:
        "A soothing herbal tea known for its calming and floral flavors.",
      price: 10.49,
      currency: "USD",
      image: "https://m.media-amazon.com/images/I/71gM+5KMC5L.jpg",
      ratings: 4.5,
      reviews: 140,
      type: "Loose Leaf",
      caffeineLevel: "Caffeine-Free",
    },
    {
      id: "7",
      company: "Tasty Treats",
      title: "Chocolate Chip Cookies",
      description: "Delicious and chewy cookies with generous chocolate chips.",
      price: 7.99,
      currency: "USD",
      image: "https://m.media-amazon.com/images/I/418WaWgJZwL.jpg",
      ratings: 4.8,
      reviews: 180,
      type: "Pack of 12",
      allergens: ["Wheat", "Soy", "Dairy"],
      isGlutenFree: false,
    },
    {
      id: "8",
      company: "Healthy Snacks",
      title: "Roasted Almonds",
      description: "Crunchy and wholesome almonds roasted to perfection.",
      price: 9.49,
      currency: "USD",
      image: "https://m.media-amazon.com/images/I/61g6k+K+0RL.jpg",
      ratings: 4.7,
      reviews: 160,
      type: "200g Pack",
      allergens: ["Tree Nuts"],
      isGlutenFree: true,
    },
    {
      id: "9",
      company: "Sweet Delights",
      title: "Assorted Gummy Bears",
      description: "A colorful mix of sweet and fruity gummy bears.",
      price: 5.99,
      currency: "USD",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHvCrLp_fALRELpiRhW_uaAYLtrMYdOoM1OQmMgSWmlBbu-mwrwkMd9Jl8drNLT9dEnk&usqp=CAU",
      ratings: 4.6,
      reviews: 140,
      type: "250g Pack",
      allergens: ["Gelatin"],
      isGlutenFree: true,
    },
  ];

  return (
    <div className="ssss">
      <div className="menu-Con">
        <h2 className="text">Recommended</h2>
        <a href="#" className="menu">
          View Menu
        </a>
      </div>
      <div className="cardContainer">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
