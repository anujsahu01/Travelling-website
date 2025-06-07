import React from "react";
// import "./DestinationSection.css";

const DestinationSection = () => {
  return (
    <section className="section destination">
      <div className="container">
        <p className="section-subtitle">Destinations</p>
        <h2 className="h2 section-title">Choose Your Place</h2>

        <ul className="destination-list">
          <li style={{ flex: "1 1 calc(50% - 15px)" }}>
            <a href="#" className="destination-card">
              <figure className="card-banner">
                <img
                  src="./images/destination-1.jpg"
                  loading="lazy"
                  alt="Malé, Maldives"
                />
              </figure>
              <div className="card-content">
                <p className="card-subtitle">Malé</p>
                <h3 className="h3 card-title">Maldives</h3>
              </div>
            </a>
          </li>

          <li style={{ flex: "1 1 calc(50% - 15px)" }}>
            <a href="#" className="destination-card">
              <figure className="card-banner">
                <img
                  src="./images/destination-2.jpg"
                  loading="lazy"
                  alt="Bangkok, Thailand"
                />
              </figure>
              <div className="card-content">
                <p className="card-subtitle">Bangkok</p>
                <h3 className="h3 card-title">Thailand</h3>
              </div>
            </a>
          </li>

          <li style={{ flex: "1 1 100%" }}>
            <a href="#" className="destination-card">
              <figure className="card-banner">
                <img
                  src="./images/destination-3.jpg"
                  loading="lazy"
                  alt="Kuala Lumpur, Malaysia"
                />
              </figure>
              <div className="card-content">
                <p className="card-subtitle">Kuala Lumpur</p>
                <h3 className="h3 card-title">Malaysia</h3>
              </div>
            </a>
          </li>

          <li style={{ flex: "1 1 100%" }}>
            <a href="#" className="destination-card">
              <figure className="card-banner">
                <img
                  src="./images/destination-4.jpg"
                  loading="lazy"
                  alt="Kathmandu, Nepal"
                />
              </figure>
              <div className="card-content">
                <p className="card-subtitle">Kathmandu</p>
                <h3 className="h3 card-title">Nepal</h3>
              </div>
            </a>
          </li>

          <li style={{ flex: "1 1 100%" }}>
            <a href="#" className="destination-card">
              <figure className="card-banner">
                <img
                  src="./images/destination-5.jpg"
                  loading="lazy"
                  alt="Jakarta, Indonesia"
                />
              </figure>
              <div className="card-content">
                <p className="card-subtitle">Jakarta</p>
                <h3 className="h3 card-title">Indonesia</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DestinationSection;
