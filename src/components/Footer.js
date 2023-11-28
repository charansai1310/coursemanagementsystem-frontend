import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer" id="footer">
      <div class="copy">
        &copy; Copyright by Team 10, 2023. All Rights Reserved.
      </div>
      <div class="bottom-links">
        <div class="links">
          <Link href="/">Home</Link>
          <Link href="/Aboutus">About Us</Link>
          <Link href="/Contactus">Contact Us</Link>
          <Link href="#footer">Social Media Links</Link>
        </div>
        <div class="links">
          <Link href="#" class="fa fa-facebook"></Link>
          <Link href="#" class="fa fa-twitter"></Link>
          <Link href="#" class="fa fa-instagram"></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
