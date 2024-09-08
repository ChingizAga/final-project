import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="container mb-3">
      <div className="info white pd pdr-65p">
        <h1 className="lemon-primary-lemon">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          is a fully licensed restaurant concept that specializes in the
          preparation of authentic <br /> Neapolitan-style wood oven pizza,
          salad, and Italian inspired dishes.
        </p>
        <Link className="txt-dec-none" to="reserve">
          <button className="reserve-btn">Reserve</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
