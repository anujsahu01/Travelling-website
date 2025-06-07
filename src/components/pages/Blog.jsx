import React from "react";
import { IonIcon } from "@ionic/react";
import {
  timeOutline,
  arrowForwardOutline,
} from "ionicons/icons";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "./images/popular-1.jpg",
      date: "04 Dec",
      time: "10:30 AM",
      author: "Jony bristow",
      role: "Admin",
      title: "A good traveler has no fixed plans and is not intent on arriving.",
    },
    {
      id: 2,
      image: "./images/blog-2.jpg",
      date: "04 Dec",
      time: "10:30 AM",
      author: "Jony bristow",
      role: "Admin",
      title: "A good traveler has no fixed plans and is not intent on arriving.",
    },
    {
      id: 3,
      image: "./images/blog-3.jpg",
      date: "04 Dec",
      time: "10:30 AM",
      author: "Jony bristow",
      role: "Admin",
      title: "A good traveler has no fixed plans and is not intent on arriving.",
    },
  ];

  return (
    <section className="section blog">
      <div className="container">
        <p className="section-subtitle">From The Blog Post</p>
        <h2 className="h2 section-title">Latest News & Articles</h2>

        <ul className="blog-list">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={post.image}
                      width="740"
                      height="518"
                      loading="lazy"
                      alt={post.title}
                      className="img-cover"
                    />
                  </a>

                  <span className="card-badge">
                    <IonIcon icon={timeOutline} />
                    <time>{post.date}</time>
                  </span>
                </figure>

                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="author-wrapper">
                      <figure className="author-avatar">
                        <img
                          src="./images/author-avatar.png"
                          width="30"
                          height="30"
                          alt={post.author}
                        />
                      </figure>
                      <div>
                        <a href="#" className="author-name">
                          {post.author}
                        </a>
                        <p className="author-title">{post.role}</p>
                      </div>
                    </div>

                    <time className="publish-time">{post.time}</time>
                  </div>

                  <h3 className="card-title">
                    <a href="#">{post.title}</a>
                  </h3>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <IonIcon icon={arrowForwardOutline} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
