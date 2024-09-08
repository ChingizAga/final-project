import "./About.css";
import AboutPic1 from "../images/logos/aboutus1.jpg";
import AboutPic2 from "../images/logos/aboutus2.jpg";

export default function About() {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Welcome to Little Lemon</h2>
            <p>
              Nestled in the heart of the city, Little Lemon is your cozy escape
              to Italy, where traditional flavors meet a modern twist. Our chefs
              pride themselves on using the freshest ingredients to craft
              authentic Italian dishes that transport you straight to the
              sun-soaked countryside. From classic pasta dishes like creamy
              carbonara and rich lasagna to wood-fired pizzas with perfectly
              crisp crusts, every bite is a celebration of Italy’s culinary
              heritage.
            </p>
            <p>
              Don't miss our signature house-made lemon ricotta cheesecake, a
              nod to our name, Little Lemon! Whether you're here for a casual
              meal with friends, a romantic evening, or a special celebration,
              our warm atmosphere and delicious food make every visit memorable.
              Pair your meal with a selection from our curated wine list, and
              let the flavors of Italy come alive at Little Lemon.
            </p>
            <p>Welcome to Little Lemon</p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img
                className="about-pic img-fluid"
                src={AboutPic1}
                alt="About us 1"
              />
            </div>
            <div>
              <img
                className="about-pic img-fluid"
                src={AboutPic2}
                alt="About us 2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
