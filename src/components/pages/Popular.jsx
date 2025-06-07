import React from "react";
import { IonIcon } from "@ionic/react";
import { timeOutline, star, starOutline } from "ionicons/icons";

const tourData = [
  {
    image: "./images/popular-1.jpg",
    alt: "Kuala Lumpur, Malaysia",
    duration: "12 Days",
    price: "From $50.00",
    rating: 4,
    reviews: 2,
    title: "A good traveler has no fixed plans and is not intent on arriving.",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    image: "./images/popular-2.jpg",
    alt: "Kuala Lumpur, Malaysia",
    duration: "12 Days",
    price: "From $50.00",
    rating: 4,
    reviews: 2,
    title: "A good traveler has no fixed plans and is not intent on arriving.",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    image: "./images/popular-3.jpg",
    alt: "Kuala Lumpur, Malaysia",
    duration: "12 Days",
    price: "From $50.00",
    rating: 4,
    reviews: 2,
    title: "A good traveler has no fixed plans and is not intent on arriving.",
    location: "Kuala Lumpur, Malaysia",
  },
];

const Popular = () => {
  return (
    <section className="section popular">
      <div className="container">
        <p className="section-subtitle">Featured Tours</p>
        <h2 className="h2 section-title">Most Popular Tours</h2>

        <ul className="popular-list">
          {tourData.map((tour, index) => (
            <li key={index}>
              <div className="popular-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={tour.image}
                      width="740"
                      height="518"
                      loading="lazy"
                      alt={tour.alt}
                      className="img-cover"
                    />
                  </a>

                  <span className="card-badge">
                    <IonIcon icon={timeOutline} />
                    <time dateTime="P12D">{tour.duration}</time>
                  </span>
                </figure>

                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">{tour.price}</div>

                    <div className="card-rating">
                      {[...Array(5)].map((_, i) => (
                        <IonIcon
                          key={i}
                          icon={i < tour.rating ? star : starOutline}
                        />
                      ))}
                      <data value={tour.reviews}>({tour.reviews})</data>
                    </div>
                  </div>

                  <h3 className="card-title">
                    <a href="#">{tour.title}</a>
                  </h3>

                  <address className="card-location">{tour.location}</address>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Popular;
