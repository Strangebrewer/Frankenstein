import React from "react";
// import { SVGNav } from "../SVGNav";
// import { Footer } from "../Footer";

export const Page = props => (
  <div className={`sticky-footer-container ${props.addedClass}`}>
    {/* {props.svg || props.loggedIn
      ? (
        <SVGNav
          animeEnd={props.animeEnd}
          animeStart={props.animeStart}
          loggedIn={props.loggedIn}
          logout={props.logout}
          menuLineGStyle={props.menuLineGStyle}
          menuLineStyle={props.menuLineStyle}
          menuOn={props.menuOn}
          menuStart={props.menuStart}
          menuStartStyle={props.menuStartStyle}
          menuStatus={props.menuStatus}
          retract={props.retract}
        />
      ) : null} */}

    <div className="main-container" style={props.pageStyle}>
      {props.children}
    </div>
    {/* {props.svg ? <Footer stickers={props.stickers} /> : null} */}
  </div>
);