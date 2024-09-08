import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img
              className="footer-logo"
              src={FooterImg}
              alt="Little lemon footer pic"
            />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>Contact Us</h4>
            <address>89 Church Ave, North York, ON M2N 6C9</address>
            <a className="footer-block" href="tel:+14163950265">
              +14163950265
            </a>
            <a className="footer-block" href="mailto: CSR@littlelemon.com">
              lemony@snicket.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>
            &copy;89 Church Ave, North York, ON M2N 6C9 © 2002 - 2024 Little
            Lemon. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
