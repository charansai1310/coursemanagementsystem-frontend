import Header from "./Header.js";
import Footer from "./Footer.js";
import "./heading.css";
import "./paragraph.css";
import "./gridcontainer.css";
import "./formfeild.css";
import "./button.css";
function ContactUs() {
  return (
    <div className="page-container">
      <Header />
      <div className="grid-container-contactus">
        <div></div>
        <div>
          <br />
          <h1>Contact Us</h1>
          <p align="left">
            Thank you for your interest in reaching out to us. We value your
            feedback, questions, and inquiries. Please feel free to get in touch
            with us using the following methods:
            <br />
            <br />
            <b>
              <i>Contact Information:</i>
            </b>
            <br />
            <br />
            <b>
              <i>Address:</i>
            </b>
            <b />
            <br />
            123 Main Street
            <br />
            Cityville, Stateville
            <br />
            12345
            <br />
            United States
            <br />
            <br />
            <b>
              <i>Phone:</i>
            </b>
            <br />
            <br />
            Main Office: 123-456-7890
            <br />
            Customer Support: 7890-456-123
            <br />
            <br />
            <b>
              <i>Operating Hours:</i>
            </b>
            <br />
            <br />
            Monday - Friday: 9:00 AM - 5:00 PM
            <br />
            Saturday: 9:00 AM - 2:00 PM
            <br />
            Sunday: Closed
            <br />
            <br />
            <b>
              <i>Contact Form:</i>
            </b>
            <br />
            <br />
            If you prefer, you can also send us a message directly through the
            contact form below. Please provide as much detail as possible so
            that we can assist you effectively.
          </p>
          <br />
          <br />
          <form className="container">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <input
              type="textarea"
              placeholder="Type Your Message(Max. 500 words)"
              name="message"
              required
            />
            <button type="submit" className="btn-contactus">
              Send
            </button>
          </form>
          <br />
          <br />
          <p align="left">
            <b>
              <i>Social Media:</i>
            </b>
            <br />
            <br />
            Connect with us on social media for updates, news, and more:
            <br />
            Facebook: [Facebook Page Link]
            <br />
            Twitter: [Twitter Page Link]
            <br />
            LinkedIn: [LinkedIn Page Link]
            <br />
            Instagram: [Instagram Page Link]
            <br />
            <br />
            <br />
            <b>
              <i>We're Here to Help:</i>
            </b>
            <br />
            <br />
            Our dedicated team is here to assist you with any questions or
            concerns you may have. Whether you're a valued customer or simply
            curious about our services, we're committed to providing you with
            the best possible support.
            <br />
            <br />
            <b>
              <i>Get in Touch:</i>
            </b>
            <br />
            <br />
            No matter the reason for your inquiry, we look forward to hearing
            from you. Your feedback helps us improve, and your questions help us
            provide the information you need. We aim to respond to all inquiries
            promptly, typically within 24hrs. Thank you for choosing Maverick
            Brilliance. We appreciate your interest, and we're here to assist
            you in any way we can.
            <br />
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
