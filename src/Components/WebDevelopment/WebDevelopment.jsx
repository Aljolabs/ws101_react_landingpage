import React from 'react';

const WebDevelopment = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title"></h2>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/B8jgJo4yrCk?si=DjDhx9-jCtoHoHZH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="about-col-2">
              <h1 className="sub-title">What is Web Development?</h1>
              <p>
                Web development, also known as website development, refers to the tasks associated with creating,
                building, and maintaining websites and web applications that run online on a browser. It may,
                however, also include web design, web programming, and database management. Web development is closely
                related to the job of designing the features and functionality of apps (web design). The term
                development is usually reserved for the actual construction of these things (that is to say, the
                programming of sites).
              </p>
              <p>
                Web development is the process of creating and maintaining websites. It involves designing the layout,
                coding the functionality, and ensuring the site works well across different devices and browsers. The
                ultimate goal is to build a user-friendly, efficient online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
