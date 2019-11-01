import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Helpers = {

  projectModals: function (project) {
    let body;
    switch (project) {
      case "vandelay":
        body =
          <Fragment>
            <p>Vandelay Rentals is a rental reservations and inventory management app built for a local rental business. It incorporates payments via Stripe, waivers via Hello Sign, data management via React Table, user authentication, a custom calendar, and advanced CSS techniques. This was my group's final project for coding boot camp.</p>
            <p>To avoid interfering with each other or inadvertently modifying working code, we created sandbox page components for each of us to work in. These sandboxes are still there, but they can only be accessed if you're signed in as a dev.</p>
            <p style={{ lineHeight: '1', marginBottom: '10px', fontWeight: 'bold' }}>Login info:</p>
            <ul>
              <li>User: 'UserDemo' pw: 'usergetin'</li>
              <li>Admin: 'Demo' pw: 'cangetin'</li>
              <li>Dev: 'DevDemo' pw: 'devgetin'</li>
            </ul>
            <div className="modal-links">
              <a href="https://github.com/Kramerica5eva/Vandelay-Rentals"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;code on GitHub
              </a>
              <a href="https://vandelay-rentals.herokuapp.com/"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;deployed on Heroku
              </a>
            </div>
          </Fragment >;
        break;
      case "money":
        body =
          <Fragment>
            <p>Mind Over Money is a money management app that offers detailed records and an at-a-glance summary of balances and trends. It allows you to record monthly bills, credit card payments, savings deposits, and checking and credit card expenses.</p>
            <p>It is customizable in that you name your accounts, you decide how many accounts you wish to track, how many bills you wish to track, and which categories of expenses you wish to track. Categories can be tracked regardless of which spending method you use (checking, which credit card, etc.). It also averages expenses by month. Login with user 'Demo' and pw 'cangetin'</p>
            <div className="modal-links">
              <a href="https://github.com/Strangebrewer/16-mind-over-money"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;code on GitHub
            </a>
              <a href="https://mind-over-money.herokuapp.com/"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;deployed on Heroku
            </a>
            </div>
          </Fragment>;
        break;
      case "eventvaark":
        body =
          <Fragment>
            <p>Event Vaark was the first group project for my coding boot camp. It is a movie &amp; event search app that draws on The Movie DB and Eventful APIs. It lets you search for movies by name and events by name or location and then save the ones you don't want to miss. The primary challenges were AJAX requests and Firebase. We also spent some time learning the basics of Green Sock animations.</p>
            <p>This is only a demo version - logins are not available, though we did have it on our list of features for future development, along with notifications when movies are released or event tickets go on sale.</p>
            <div className="modal-links">
              <a href="https://github.com/Strangebrewer/01-Event-Vaark"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;code on GitHub
              </a>
              <a href="https://strangebrewer.github.io/01-Event-Vaark/"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;deployed on GitHub Pages
              </a>
            </div>
          </Fragment>;
        break;
      case "dragon":
        body =
          <Fragment>
            <p>Dragon Writer was my last learning project before finding employment as a developer. It's functional as-is, but there are a few incomplete features, such as user public pages and some parts of the text editor. It was conceived as a rearrangeable storboarding tool for writing fiction, but it's flexible enough to be used for any writing project--even just a to-do list if that’s all you want.</p>
            <p>In addition to MERN stack, this project is built with react-beautiful-dnd and slate.js. Plans for future tinkering include smoother user experience when logging in, a landing page, a tutorial, and a public-facing page where you can publish whatever pieces you wish. Login with user 'Demo' and pw 'cangetin'.</p>
            <div className="modal-links">
              <a href="https://github.com/Strangebrewer/dragon-writer"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;code on GitHub
              </a>
              <a href="https://dragon-writer.herokuapp.com"
                target="_blank" rel="noopener noreferrer">
                &#10511;  &nbsp;&nbsp;deployed on Heroku
              </a>
              <Link to="/dragon-writer">
                &#10511;  &nbsp;&nbsp;partial rewrite w/Redux
              </Link>
            </div>
          </Fragment>;
        break;
      case "liri":
        body =
          <Fragment>
            <p>Ask Liri is a Command Line Interface (CLI) Node app that interacts via the backend with three APIs: Twitter, Spotify, and Open Movie Database (OMDb). It allows the user to search for song data, movie data, other people's tweets, their own tweets, and to post new tweets. It also allows for a random action pulled from a .txt file.</p>
            <p>As a CLI app, this is not deployable, but there is a .gif on the GitHub page demonstrating functionality.</p>
            <div className="modal-links">
              <a href="https://github.com/Strangebrewer/01-liri-node-app"
                target="_blank" rel="noopener noreferrer">
                &#10511; &nbsp;&nbsp;code on GitHub
              </a>
            </div>
          </Fragment>;
        break;
      case "starwars":
        body =
          <Fragment>
            <p>"The Death Star, or DS-1 Orbital Battle Station, was originally designed by the Geonosians before the Galactic Republic and later the Galactic Empire took over the project.</p>
            <p>"Death Stars, whose concept had been explored even before the Clone Wars, were...designed to allow Emperor Palpatine to more directly control the Galactic Empire through fear." ~ from Wookieepedia</p>
            <div className="modal-links">
              <a href="http://starwars.wikia.com/wiki/Death_Star"
                target="_blank" rel="noopener noreferrer">
                &#10511; Wookieepedia - Death Star
              </a>
            </div>
          </Fragment>;
        break;
      default:
        body = <p>Whoops! Something went wrong...</p>;
    }
    return body;
  }

}