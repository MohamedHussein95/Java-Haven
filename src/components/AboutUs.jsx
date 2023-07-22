import "./AboutUs.css";

function AboutUs({ title, body, image, reverse, style }) {
  return (
    <div className="about">
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
