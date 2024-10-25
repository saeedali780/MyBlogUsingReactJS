import React from "react";

export default function Header(props) {
  return (
    // <!-- Page Header -->
    // <!-- Set your background image for this header on the line below. -->
    <header
      className="intro-header"
      style={{ backgroundImage: 'url("img/' + props.headerImg + '")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="site-heading">
              <h1>{props.title}</h1>
              <hr className="small" />
              <span className="subheading">
                A Clean Blog Theme by Saeed Ali
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
