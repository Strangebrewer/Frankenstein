import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from 'styled-components';
import { Page } from "../components/Elements/Containers/Page";
import { ContactForm } from "../components/Elements/Forms/Contact";
import { projects } from "../utils/Projects";
import { Helpers } from "../utils/Helpers";
import "./Home.css";

const PageContainer = styled.div`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   main {
      flex: 1 0 auto;
   }
   footer {
      flex-shrink: 0;
      background: purple;
      height: 100px;
   }
`;

class Landing extends Component {
   render() {
      return (
         // <PageContainer>
         //    <main>
         //       <h1>Loot at this shitzel!</h1>
         //    </main>
         //    <footer>
         //       Here's some shit@
         //    </footer>
         // </PageContainer>
         <Page
            addedClass="plain-page"
            loggedIn={this.props.loggedIn}
            logout={this.props.logout}
            svg={this.props.svg}
         >
            <div className="plain-content">
               <section className="bio">
                  <h2>the DIGITAL</h2>
                  <h2>&nbsp;RESUME of</h2>
                  <div>
                     <h1>KEITH</h1>
                     <h1>&nbsp;ALLMON</h1>
                  </div>
                  <p>Web developer, amateur artist, DIY dabbler, and occasional advocate of the Oxford comma</p>
                  <div className="menu">
                     <h3>menu:</h3>
                     <ul>
                        <li><AnchorLink href="#about">About Me</AnchorLink></li>
                        <li><AnchorLink href="#projects">My Projects</AnchorLink></li>
                        <li><AnchorLink href="#contact">Connect with Me</AnchorLink></li>
                        {this.props.loggedIn
                           ? (
                              <React.Fragment>
                                 <li><Link className="btn-link" to="/" role="button">Home</Link></li>
                                 <li><Link className="btn-link" to="/admin" role="button">Admin</Link></li>
                                 <li><button className="btn-link" onClick={this.props.logout}>logout</button></li>
                              </React.Fragment>
                           ) : null}
                     </ul>
                  </div>
                  <div className="bio-contacts">
                     <p>You can email me at <span className="email-text">BKAShambhala@gmail.com</span></p>
                     <p>or find me on</p>
                     <p><a href="https://github.com/Strangebrewer" target="_blank" rel="noopener noreferrer">GitHub</a> &amp; <a href="https://www.linkedin.com/in/keith-allmon/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                  </div>
               </section>


               <section className="thing">

                  <div id="about" className="about-me-wrap">
                     <p>
                        <span className="aboutme-hello">Hello</span>
                        <br />
                        Thanks for checking out my portfolio website. It's built with <span className="skill-text">React</span>, which is absolutely overkill, but I love building in React, so here we are.
                  </p>

                     <p>
                        I originally built this site to be colorful and interesting, and I learned a lot about <span className="skill-text">SVG</span> and <span className="skill-text">CSS animations</span> along the way. The final product turned out great, I think. As long as you're viewing it in Google Chrome. On a desktop. See for yourself here:
                  </p>

                     <div className="style-switch-wrap">
                        <button onClick={this.props.flipStyles}>switch</button>
                     </div>

                     <p>
                        (Lesson learned: cross-browser compatibility can't be judged by cursory glances at <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">caniuse.com</a>. I may revisit this page in the future and make it work across all modern browsers.)
                  </p>

                     <p>
                        As you may have guessed, I'm primarily a <span className="skill-text">MERN</span> stack developer, but I have a  few other tricks up my sleeve as well. I can work with <span className="skill-text">relational databases</span> (<span className="skill-text">Firebase</span>, too), <span className="skill-text">Bootstrap</span> or <span className="skill-text">Materialize</span> (I prefer  plain <span className="skill-text">CSS</span>), <span className="skill-text">jQuery</span> if you're  using it, <span className="skill-text">React</span> if you're not (or just JS if you prefer), <span className="skill-text">REST APIs</span> &amp; <span className="skill-text">JSON</span>, all organized  in an MVC architecture. And as mentioned above, I've recently learned a lot about SVG.
                  </p>

                     <p>
                        If you'd like to see a few of my favorite projects, keep scrolling down. Thanks for visiting!
                  </p>
                  </div>


                  <section id="projects" className="projects-wrap">
                     <h3 className="projects-header">Projects</h3>
                     <p>(Please note: it can sometimes take a minute for Heroku servers to spin up or allow login if they haven't been started in a while.)</p>
                     {projects.filter(project => project.identifier !== "starwars")
                        .map((project, i) => (
                           <div className="project-container" key={`${project.identifier}-${i}`}>
                              <h1>{project.title}</h1>
                              <a href={project.linkto} target="_blank" rel="noopener noreferrer">
                                 <img src={project.background} alt="project website" />
                              </a>
                              <h2>Made with {project.lineOne} {project.lineTwo}</h2>
                              {Helpers.projectModals(project.identifier)}
                           </div>
                        ))}
                  </section>


                  <section id="contact" className="contact-wrap">
                     <p>If you'd like to get in touch, fill out the form below. I'm available for freelance, contract, or full-time work. I'm also available for play, parties, pontificating, coffee, carousing, caterwauling, carrying on, banter, binge-watching, soul-searching, sunsets, and/or shenanegans. Drop me a line.</p>
                     <ContactForm
                        email={this.props.email}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange}
                        message={this.props.message}
                        name={this.props.name}
                     />
                  </section>
               </section>
            </div>
         </Page>
      );
   }
}

export default Landing;