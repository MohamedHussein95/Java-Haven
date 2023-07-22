import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Recommended from "../components/Recommended";

function HomeScreen() {
  return (
    <>
      <AboutUs
        title="About Us !"
        body="At Java Haven, we are dedicated to providing our customers with the
          best coffee experience. Our journey began with the goal of sourcing
          the finest coffee beans from around the world, creating the perfect
          blend that leaves a lasting impression on your taste buds. Our skilled
          baristas ensure that each cup is crafted with precision and care. Our
          cozy coffee shop offers a place to unwind, savor your favorite cup of
          coffee, and enjoy the company of friends. Whether you need a morning
          pick-me-up or an afternoon treat, Java Haven is your destination for
          exceptional coffee, warm smiles, and moments of pure joy. Thank you
          for being a part of our coffee-loving community."
        image="https://images.pexels.com/photos/4927142/pexels-photo-4927142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        reverse={false}
        style={{}}
      />
      <AboutUs
        title="Just brew & enjoy"
        body="Welcome to Java Haven, where we believe in the simple joy of brewing and enjoying a perfect cup of coffee. Our expert baristas are dedicated to delivering a delightful coffee experience, whether you prefer a classic espresso or a specialty brew. We carefully source our coffee beans to ensure the highest quality and unique flavors in every sip. Sit back, relax, and let us brew the perfect cup for you."
        image="https://images.pexels.com/photos/2616175/pexels-photo-2616175.jpeg?auto=compress&cs=tinysrgb&w=1600"
        reverse={true}
        style={{ transform: "rotate(10deg)" }}
      />
      <AboutUs
        title="Opening Hours"
        body="We are open every day of the week to serve you the best coffee experience. Our doors open at 7 AM and close at 9 PM, so you can enjoy your favorite cup of coffee at any time of the day. Whether you're an early riser or a night owl, we'll be here to welcome you with the aroma of freshly brewed coffee and a warm smile. Come in, sit down, and let us make your day a little brighter with our delicious coffees and friendly service."
        image="https://images.pexels.com/photos/3361162/pexels-photo-3361162.jpeg?auto=compress&cs=tinysrgb&w=1600"
        reverse={false}
        style={{ transform: "rotate(-10deg)" }}
      />
      <Recommended />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default HomeScreen;
