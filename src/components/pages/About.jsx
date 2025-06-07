import React from "react";
import { IonIcon } from "@ionic/react";
import { compass, briefcase, umbrella } from "ionicons/icons";

const About = () => {
  const features = [
    {
      icon: compass,
      title: "Tour guide",
      description:
        "Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      icon: briefcase,
      title: "Friendly price",
      description:
        "Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      icon: umbrella,
      title: "Reliable tour",
      description:
        "Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
  ];

  return (
    <section className="section about">
      <div className="container">
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
            Explore all tour of the world with us.
          </h2>
          <p className="about-text">
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look
            even slightly believable.
          </p>

          <ul className="about-list">
            {features.map((item, index) => (
              <li className="about-item" key={index}>
                <div className="about-item-icon">
                  <IonIcon icon={item.icon} />
                </div>
                <div className="about-item-content">
                  <h3 className="h3 about-item-title">{item.title}</h3>
                  <p className="about-item-text">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#" className="btn btn-primary">
            Booking Now
          </a>
        </div>

        <figure className="about-banner">
          <img
            src="./images/about-banner.png"
            width="756"
            height="842"
            loading="lazy"
            alt="About Banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
