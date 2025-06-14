import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoGithub,
  logoInstagram,
  logoLinkedin,
  logoGoogle,
  chevronUpOutline,
} from "ionicons/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29efbou",      
        "template_59zgk8n",      
        form.current,
        "gzYDE4UeAoqkKyFmA"    
      )
      .then(
        (result) => {
          toast.success("Subscribed successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <footer
        className="footer"
        style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}
      >
        <div className="container">
          <div className="footer-top">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Top destination</p>
              </li>
              <li><a href="#" className="footer-link">Indonesia, Jakarta</a></li>
              <li><a href="#" className="footer-link">Maldives, Malé</a></li>
              <li><a href="#" className="footer-link">Australia, Canberra</a></li>
              <li><a href="#" className="footer-link">Thailand, Bangkok</a></li>
              <li><a href="#" className="footer-link">Morocco, Rabat</a></li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Categories</p>
              </li>
              <li><a href="#" className="footer-link">Travel</a></li>
              <li><a href="#" className="footer-link">Lifestyle</a></li>
              <li><a href="#" className="footer-link">Fashion</a></li>
              <li><a href="#" className="footer-link">Education</a></li>
              <li><a href="#" className="footer-link">Food & Drink</a></li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Quick links</p>
              </li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Tours</a></li>
              <li><a href="#" className="footer-link">Booking</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
            </ul>

            <div className="footer-list">
              <p className="footer-list-title">Get a newsletter</p>
              <p className="newsletter-text">
                For the latest deals and tips, travel no further than your inbox
              </p>

              <form className="newsletter-form" ref={form} onSubmit={sendEmail}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <a href="#" className="logo">Tourest</a>

            <p className="copyright">
              &copy; 2025 <a href="#" className="copyright-link">code with Anuj</a>. All Rights Reserved
            </p>

            <ul className="social-list">
              <li><a href="https://www.facebook.com/share/1BUyC6vz5n/" className="social-link"><IonIcon icon={logoFacebook} /></a></li>
              <li><a href="https://github.com/anujsahu01" className="social-link"><IonIcon icon={logoGithub} /></a></li>
              <li><a href="https://www.instagram.com/anuj_sahu.as01?igsh=eDRncXdhOHF0Z2cy" className="social-link"><IonIcon icon={logoInstagram} /></a></li>
              <li><a href="https://www.linkedin.com/in/anuj-sahu-abba1a257/" className="social-link"><IonIcon icon={logoLinkedin} /></a></li>
              <li><a href="#" className="social-link"><IonIcon icon={logoGoogle} /></a></li>
            </ul>
          </div>
        </div>
      </footer>

      <a href="#top" className="go-top" aria-label="Go To Top">
        <IonIcon icon={chevronUpOutline} />
      </a>
    </>
  );
};

export default Footer;
