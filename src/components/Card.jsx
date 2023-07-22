import "./Card.css";
function Card({ item }) {
  return (
    <div className="card">
      <div className="head">
        <h3 className="company">{item.company}</h3>
      </div>
      <div className="image-con">
        <img src={item.image} alt={item.title} className="image" />
      </div>
      <div
        style={{ width: "100%", height: "2px", background: "rgba(0,0,0,.1)" }}
      />

      <div className="foot">
        <h3 className="title">{item.title}</h3>
        <div className="price-con">
          <h3 className="price">
            {item.currency} {item.price}
          </h3>
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
