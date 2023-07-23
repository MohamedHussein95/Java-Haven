import "./Hero.css";
function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="hero">
        <img
          src="../../hero_logo.png"
          alt="java haven logo"
          className="hero-logo"
        />
        <h1 className="heroTitle" style={{ "--i": 1 }}>
          Fresh & happy One bean at a time
        </h1>
        <h3 className="hero-body" style={{ "--i": 2 }}>
          We have a wide variety of Coffee as well as other specialty dishes
          such as pizza and flavoured chicken,making Java Haven a venue for any
          occassion
        </h3>
        <button className="order-btn" style={{ "--i": 3 }}>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
