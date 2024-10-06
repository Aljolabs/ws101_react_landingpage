import React, { useState } from 'react';
import frontEndImg from './front-end.png'; 
import backEndImg from './code-1.png'; 
import fullStackImg from './back-end.webp'; 

const Types = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <section id="mywork">
            <div id="portfolio">
                <div className="container">
                    <h1 className="sub-title">Types of Web Development</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src={frontEndImg} alt="Front-end Development" />
                            <div className="layer">
                                <h3>Front-end Development</h3>
                                <p>Front-end development is the process of designing and implementing the user interface (UI) and user experience (UX) of a web application. 
                                    It involves creating visually appealing and interactive elements that users interact with directly.</p>
                                <a href="/" className="footer__icon"><i className='bx bxl-html5'></i></a>
                            </div>
                        </div>
                        
                        <div className="work">
                            <img src={backEndImg} alt="Back-end Development" />
                            <div className="layer">
                                <h3>Back-end Development</h3>
                                <p>Back-end development involves building the server-side logic and database components of a web application. 
                                    It is responsible for processing user requests, managing data, and ensuring the overall functionality of the application.
                                </p>
                                <a href="/" className="footer__icon"><i className="fa-brands fa-python"></i></a>
                            </div>
                        </div>
            
                        <div className="work">
                            <img src={fullStackImg} alt="Full stack Development" />
                            <div className="layer">
                                <h3>Full stack Development</h3>
                                <p>Full-stack development refers to the practice of designing, building, and maintaining the entire software stack of a web application. 
                                    This includes both the frontend (client-side) and backend (server-side) components, as well as the database and any other necessary infrastructure.
                                </p>
                                <a href="/" className="codes__icon"><i className=" bx bxl-nodejs"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="about-col-2">
                        <div className="tab-title">
                            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Front-end</p>
                            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Back-end</p>
                            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Full stack</p>
                        </div>

                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <h1>Most common Programming Languages, Frameworks, and Libraries in Front-End Development</h1>
                                <li><span>HTML</span><br />Hyper Text Markup Language, or HTML for short, is a programming language for making websites and web applications. Markup languages are computer languages to apply standard layout and formatting rules to text documents. Dynamic and engaging content is possible using markup languages. The program has the ability to transform plain text into graphics, tables, hyperlinks, and more.</li>
                                <li><span>CSS</span><br />CSS is an abbreviation for cascading style sheets. This is the language used to create a website’s design and structure. CSS is as essential as HTML for building websites. Websites would still just be sober text on a plain background if it wasn’t around.</li>
                                <li><span>JavaScript</span><br />JavaScript is a simple, translated programming language used to enhance and add functionality to websites. It’s versatile enough to be used for everything from adding new buttons to creating complex animations. JavaScript extends the functionality of the browser by following basic instructions embedded within script tags in an HTML document.</li>
                                <li><span>Angular</span><br />When it comes to web frontend frameworks, Angular is by far the most popular option. A framework for developing highly functional and feature-rich single-page programs. It’s a Google-made programming environment that relies on Typescript. Angular is a series of tools for creating, building, testing, and modifying code, as well as a library of well-integrated libraries, all geared toward the creation of large online applications.</li>
                                <li><span>React</span><br />React, or ReactJS as it is more often referred, is a popular front-end JavaScript toolkit for creating user interfaces and associated components. It is built using MVC, but with a new data presentation and accessibility matrix. The Virtual DOM and its approach to document access and modification are two of its defining characteristics. As a result of the DOM’s interactions with HTML and XML documents, the latter take on a tree-like structure, with each HTML element acting as an object.</li>
                                <li><span>Backbone.js</span><br />Backbone, first published in 2010, is a simple and compact front-end framework. It’s meant for creating single-page applications and is based on the Model-View-Presenter (MVP) syntax. Backbone.js is a popular JavaScript library that offers frameworks with custom actions and substantial key-value binding, giving web applications the structure they need. Libraries of enhanced APIs exist, including features like functions, declarative event handling, and views. It has a RESTful JSON interface, so it can talk to the existing API without any problems.</li>
                                <li><span>Ember.js</span><br />Since 2011, developers have had access to the Ember.js frontend framework. Aspiring web developers leverage Ember to create robust cross-platform projects, despite the fact that it is not as popular as other frameworks. It would be another open-source option worth watching. It may help you create cutting-edge UIs for web-based software, mobile and desktop apps, and even cross-platform software.</li>
                                <li><span>Semantic-UI</span><br />Semantic-UI is a web design framework that allows you to make sites that look great on all devices. It’s always being updated and expanded upon in order to better serve its users. So, it’s a viable alternative to the popular Bootstrap framework. The concept of a semantic user interface has only been around for a short while. It’s widely recognized as a top frontend framework for building websites. The success is due to the user interface’s readability, ease of use, and spontaneity. Being written in a very straightforward programming language, it is accessible even to newcomers. t’s a great development platform since the process for creating websites and apps is simple, and it works with a number of different third-party libraries.</li>
                                <li><span>Svelte</span><br />This framework is a relative newcomer to the field of frontend development, having had its original launch in 2016, and its steady release occurring in the fall of 2021. In spite of its maturity, Svelte merits consideration as a viable option for creating innovative user interfaces.</li>
                                <li><span>Vue</span><br />Vue.js is a cutting-edge, forward-thinking MVVM framework that makes excellent use of gradual adoption. Being one of the top JavaScript libraries, Vue.js has been developing compact, flexible, and interactive UI components. It offers data-reactive components with an adaptable and user-friendly application programming interface. Little tasks are easy to finish and may be scaled up to bigger ones with little difficulty.</li>
                                <li><span>Preact</span><br />Although React is the most widely used front-end framework, it is not without flaws. It was for these reasons that the concept of creating a lightweight framework with the same capabilities as React emerged. This is how Preact, a very condensed form of React, came into being. Both Preact and React are based on the same API and follow the same app development practices. Preact, on the other hand, is far more compact and makes use of the most lightweight and speedy virtual DOM implementation imaginable.
                                </li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <h1>Commonly employed programming languages and frameworks in Back-end Development</h1>
                                <li><span>Java</span><br />Java is a popular backend programming language used for building robust and scalable web applications. It runs on the Java Virtual Machine (JVM). This makes Java a highly portable language. Java is a compiled language, which means that it is highly optimized for performance. It is also designed to use resources efficiently, making it a great choice for building applications that need to handle large volumes of traffic and data.
                                </li>
                                <li><span>SQL</span><br />SQL (Structured Query Language) is not a programming language in the traditional sense, but rather a domain-specific language used for managing relational databases. However, SQL is commonly used as a backend technology to handle database operations in web applications.</li>
                                <li><span>Python</span><br />Considering its versatility, Python is a great language for building websites. A language suitable for usage in many different industries and contexts. If you have experience with other programming languages for web development, Python won’t take long to pick up. Many opportunities exist for skilled Python programmers in the world’s leading IT companies.</li>
                                <li><span>.Net</span><br />.NET is a popular backend programming language and framework developed by Microsoft. It is a cross-platform framework and can be used to build applications for Windows, Linux, and macOS.</li>
                                <li><span>Django</span><br />Django, a Python framework, was introduced in 2005 and quickly rose to prominence. It’s a top-tier, open-source framework that has everything a programmer may need, including scalability and personalization. Django is built on the MVC pattern and the DRY coding concept, both of which emphasize code reuse to improve Django’s speed and efficiency. The JSON, XML, and HTML markup languages are all supported by this framework.</li>
                                <li><span>Laravel</span><br />Laravel is a PHP framework that was introduced in 2011 and is based on the Model-View-Controller (MVC) design pattern. It has a user-friendly interface and is backed by a comprehensive library and API. Its primary function is the creation of websites, such as blogs, online shops, and news sources. With Laravel, programmers can build incredible, bespoke web applications with the aid of PHP’s expressive and beautiful syntax and database utilities like ORM (Object Relational Mapper).</li>
                                <li><span>Express</span><br />Express is a web application framework for Node.js that was launched in 2010 and is developed in JavaScript to handle REST API applications. It’s the backend component of the MEAN and MERN stack, which is used to create dynamic mobile and web apps. Express is quick, opinion-free, and simple.</li>
                                <li><span>Spring Boot</span><br />For those interested in Java frameworks, Spring Boot was published in 2014 and is both open source and lightweight. Use it to build apps that run independently of the web. A spring core container, a container-providing module, is included. It’s a well-liked framework since it uses the MVC design pattern and can handle CRUD tasks.</li>
                                <li><span>Ruby on Rails</span><br />Ruby on Rails is a server-side framework that has been available since 2004. In terms of web services, it provides a default architecture that is based on the Model-View-Controller pattern. It utilizes HTML, CSS, and JavaScript to generate a database free of errors and to develop programs.</li>
                                <li><span>ASP.NET</span><br />Released in 2002, ASP.NET (Active Server Pages) is a C#-based, open-source framework that is completely free to use. It’s a Windows-compatible modular framework that works with the.NET runtime. Because of its extensive API services and microservices, it is the go-to framework for developing modern, real-time online applications.
                                </li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <h1>Commonly Employed Stacks in Full-Stack Web Development</h1>
                                <li><span>MEAN</span><br />MEAN is a popular technology stack because it offers several advantages to web developers. The usage of a single language (JavaScript) and the availability of free, open-source technology are two of the advantages. What makes up MEAN are:
                                <ul>- MongoDB (NoSQL database) (NoSQL database).</ul>
                                <ul>- Use of the Express.js web framework for the back end.</ul>
                                <ul>- An HTML5 and JSX front-end framework called Angular.</ul>
                                <ul>- Node.js server-side JavaScript.</ul>
                                With MEAN, you can create apps that are both quick and powerful. The components may exchange data via the JavaScript Object Notations (JSON) language, and they have access to a vast, open-source library of modules. This technology stack is useful for creating highly scalable software. It works well for any sort of dynamic web page or program.
</li>
                                <li><span>MERN</span><br />Simply said, MERN is just like MEAN but with a different name. Swapping out Angular.js with React is the main difference. The main reasons to use MERN are the full-stack development alternative, the React integration, the strong library, and the possibility to utilize code on browsers and servers concurrently (frontend and backend). In particular, React is well-known for its speed and adaptability in creating interactive user interfaces. An abbreviation for MERN consists:
                                    <ul>- MongoDB (NoSQL database) (NoSQL database).</ul>
                                    <ul>- Use of the Express.js web framework for the back end.</ul>
                                    <ul>- React (a front-end JavaScript library for building user interfaces)</ul>
                                    <ul>- Node.js server-side JavaScript.</ul>
                                </li>
                                <li><span>MEVN</span><br />An alternative to Angular.js, which is used by the standard MEAN stack, is Vue.js, which is used by the MEVN stack. Vue.js has been gaining traction over the past few years. The finest of Angular and React are combined in it. Vue.js is a popular online application framework because it is simple to pick up, produces a readable code base, and has high speed.
                                    <ul>- MongoDB (NoSQL database) (NoSQL database).</ul>
                                    <ul>- Use of the Express.js web framework for the back end.</ul>
                                    <ul>- Vue.js: A front-end JavaScript framework for building user interfaces.</ul>
                                    <ul>- Node.js server-side JavaScript.</ul></li>
                                <li><span>LAMP</span><br />If you’re looking for a model for your technology stack, LAMP is the gold standard. It provides the highest levels of productivity, adaptability, and performance in the field of web development, all at the lowest possible cost. An abbreviation for LAMP consists:
                                    <ul>- Linux (operating system) (operating system).</ul>
                                    <ul>- Apache (HTTP server) (HTTP server).</ul>
                                    <ul>- MySQL (relational database administration) (relational database management).</ul>
                                    <ul>- PHP (programming language, it might also be Perl or Python) (programming language, it can also be Perl or Python).</ul>
                                    Each component of this stack is available as open source software at no cost. The components of this technology stack are interchangeable and can operate on any platform. The Windows option is WAMP, whereas the Mac version is MAMP.</li>
                            </ul>
                        </div>

                        <div className="tab-title">
                            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Front-end</p>
                            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Back-end</p>
                            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Full stack</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Types;
