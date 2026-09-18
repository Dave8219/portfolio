import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import rockImage from "./assets/rock-paper-scissors.png";
import myLogo from "./assets/my-logo-3.PNG";
import storeImage from "./assets/online-store.png";
import myServices from "./assets/my-services-1.PNG";
import profilePic from "./assets/profile-pic.jpg";
import toDoListImage from "./assets/to-do-list-image.png";
import restaurantImage from "./assets/restaurant-menu.png";
import calculatorImage from "./assets/calculator.png";

import databaseImage from "./assets/database.png";
import umbrellaImage from "./assets/umbrella-pic.png";
import webImage from "./assets/web-image.jpeg";
import "./renderApp.css";

const RenderApp = () => {
  return (
    <>
      <Header />
      <Section />
      <main>
        <section>
          <div className="main-headline">
            <h1>My Portfolio</h1>
          </div>
        </section>

        <section className="portfolio-container">
          <div className="port-container">
            <h1 className="portfolio-header">Database App</h1>
            <div className="image-background">
              <a
                href="https://my-database-app.netlify.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  src={databaseImage}
                  className="icon-images"
                  alt="An Image of a Database Graphic Connecting"
                />
              </a>
            </div>
            <div className="code-links">
              <div>
                <h3>
                  <a
                    href="https://my-database-app.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </h3>
                <h3>
                  <a
                    href="https://github.com/Dave8219/my-database-app.git"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </h3>
              </div>

              <div className="code-tech">
                <h3>React</h3>
                <h3>Node/Express</h3>
                <h3>MySql</h3>
              </div>
            </div>
          </div>

          <div className="port-container">
            <h1 className="portfolio-header">Task Management App</h1>
            <div className="image-background">
              <a
                href="https://app-task-mgn.netlify.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  src={toDoListImage}
                  className="icon-images"
                  alt="A To-Do List Image"
                />
              </a>
            </div>
            <div className="code-links">
              <div>
                <h3>
                  <a
                    href="https://app-task-mgn.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </h3>

                <h3>
                  <a
                    href="https://github.com/Dave8219/task-app.git"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </h3>
              </div>

              <div className="code-tech">
                <h3>JavaScript</h3>
                <h3>Node/Express</h3>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="port-container">
            <div className="heading-text">
              <h1 className="portfolio-header">Online Store -</h1>
              <h3>Amazon Clone</h3>
            </div>

            <div className="image-background">
              <a
                href="https://dave8219.github.io/amazon-store-clone/index.html"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  src={storeImage}
                  className="icon-images"
                  alt="An Image of an Online Store With a Shopping Cart"
                />
              </a>
            </div>
            <div className="code-links">
              <div>
                <h3>
                  <a
                    href="https://online-store-clone.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </h3>

                <h3>
                  <a
                    href="https://github.com/Dave8219/amazon-store-clone.git"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </h3>
              </div>

              <div className="code-tech">
                <h3>JavaScript</h3>
                <h3>Frontend</h3>
              </div>
            </div>
          </div>

          <div className="port-container">
            <h1 className="portfolio-header">Rock, Paper, Scissors Game</h1>
            <div className="image-background">
              <a
                href="https://dave8219.github.io/rock-paper-scissors-game/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  src={rockImage}
                  className="icon-images"
                  alt="An Image of a Rock, Paper, Scissors Game"
                />
              </a>
            </div>
            <div className="code-links">
              <div>
                <h3>
                  <a
                    href="https://rps-26-game.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </h3>

                <h3>
                  <a
                    href="https://github.com/Dave8219/rock-paper-scissors-game.git"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </h3>
              </div>

              <div className="code-tech">
                <h3>JavaScript</h3>
                <h3>Frontend</h3>
              </div>
            </div>
          </div>

          <div className="port-container">
            <h1 className="portfolio-header">Calculator</h1>
            <div className="image-background">
              <a
                href="https://dave8219.github.io/calculator-app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  src={calculatorImage}
                  className="icon-images"
                  alt="An Image of a Calculator"
                />
              </a>
            </div>
            <div className="code-links">
              <div>
                {/*

  <h3>
                  <a
                    href="https://dave8219.github.io/calculator-app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </h3>

*/}

                <h3>
                  <a
                    href="https://github.com/Dave8219/calculator-app.git"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </h3>
              </div>

              <div className="code-tech">
                <h3>JavaScript</h3>
                <h3>Frontend</h3>
              </div>
            </div>
          </div>

          <div className="port-container">
            <h1 className="portfolio-header">Business Website</h1>
            <div className="image-background">
              <div className="preview-container">
                <h4>COMING SOON</h4>
              </div>
              <img
                src={webImage}
                className="icon-images"
                alt="A Picture of a Website"
              />
            </div>
          </div>

          <div className="port-container">
            <h1 className="portfolio-header">Restaurant Menu</h1>
            <div className="image-background">
              <div className="preview-container">
                <h4>COMING SOON</h4>
              </div>
              <img
                src={restaurantImage}
                className="icon-images"
                alt="An Image of a Restaurant Menu"
              />
            </div>
          </div>

          <div className="port-container">
            <h1 className="portfolio-header">Weather App</h1>
            <div className="image-background">
              <div className="preview-container">
                <h4>COMING SOON</h4>
              </div>
              <img
                src={umbrellaImage}
                className="icon-images"
                alt="A Picture of an Umbrella"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-containers">
          <img src={myLogo} alt="My Logo" className="my-logo" />
        </div>
        <div className="header-containers"></div>
        <nav className="header-containers">
          <ul className="nav-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

const Section = () => {
  return (
    <>
      <section className="portfolio-container">
        <div className="hero-text">
          <h1>Welcome!</h1>
          <br />
          <br />
          <h2>
            My name is <span className="color-name">David</span>.
          </h2>
          <h2>
            I'm a full-stack software engineer & web developer. I specialize in
            MERN and CRUD development, along with Next.js or Redux Toolkit. I
            also have experience with Python & backend cybersecurity.
          </h2>

          <br />
          <br />
          <button className="learn-more-cta">Learn More</button>
          <div>
            <img
              src={myServices}
              alt="A List of My Programming Languages"
              className="my-services"
            />
          </div>
        </div>
        <div>
          <img
            src={profilePic}
            className="profile-pic"
            alt="My Profile Picture"
          />
        </div>
      </section>
    </>
  );
};

export default RenderApp;
