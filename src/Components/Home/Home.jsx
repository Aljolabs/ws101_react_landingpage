import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HomeImg from './esmil.jpg';

const Home = () => {
  const roles = ['Front-End Developer', 'Back-End Developer', 'Full Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [currentRole, setCurrentRole] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate


  // Typing effect for roles
  useEffect(() => {
    const typeRole = () => {
      if (!isErasing && charIndex < roles[roleIndex].length) {
        setCurrentRole(prev => prev + roles[roleIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else if (!isErasing && charIndex === roles[roleIndex].length) {
        setTimeout(() => setIsErasing(true), 1000); // Pause before erasing
      } else if (isErasing && charIndex > 0) {
        setCurrentRole(roles[roleIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isErasing && charIndex === 0) {
        setIsErasing(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    };

    const typingInterval = setInterval(typeRole, isErasing ? 50 : 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, isErasing, roleIndex, roles]);

  const handleButtonClick = () => {
    navigate('/webdevelopment'); // Navigate to /webdevelopment
  };

  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">"Broaden Your Horizons and Unlock the World of Web Development"<br />
          <span className='home__title__color'>Learn, Build, Succeed!</span>
        </h1>
        <h1 className='home__title'>
          Be One of Us! Become a<br />
          <span id="role">{currentRole}</span>
        </h1>
        <button className="button" onClick={handleButtonClick}>Get Started</button>
      </div>
      <img className="home__img" src={HomeImg} alt="Esmil" />
    </section>
  );
};

export default Home;
