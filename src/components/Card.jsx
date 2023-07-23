import { useEffect, useRef, useState } from "react";
import "./Card.css";
function Card({ item }) {
  const [visible, setVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.2, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`card ${visible ? "animate" : ""}`}
      style={{ "--i": item.id }}
      ref={aboutRef}
    >
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
