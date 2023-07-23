import { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

function AboutUs({ title, body, image, reverse, style }) {
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
      className={`about ${visible ? "animate" : ""}`}
      style={{ "--i": 1, ...style }}
      ref={aboutRef}
    >
      {reverse ? (
        <>
          <div className="aboutImageContainer">
            <img
              src={image}
              alt="coffee"
              className={"aboutImage"}
              style={style}
            />
          </div>
          <div className="aboutContentContainer">
            <h1 className="aboutTitle">{title}</h1>
            <h3 className="aboutBody">{body}</h3>
          </div>
        </>
      ) : (
        <>
          <div className="aboutContentContainer">
            <h1 className="aboutTitle">{title}</h1>
            <h3 className="aboutBody">{body}</h3>
          </div>
          <div className="aboutImageContainer">
            <img
              src={image}
              alt="coffee"
              className={"aboutImage"}
              style={style}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default AboutUs;
