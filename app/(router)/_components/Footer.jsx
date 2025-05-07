import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="dark:bg-black bg-gray-100 text-gray-700 dark:text-gray-100 p-4 text-center">
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Sections */}
        <div style={{ flex: '1 1 200px', margin: '10px' }}>
          <h2>Sections</h2>
          <ul>
            <li>Findings</li>
            <li>Campus & Community</li>
            <li>Health</li>
            <li>Science & Tech</li>
            <li>Nation & World</li>
            <li>Arts & Culture</li>
            <li>Work & Economy</li>
          </ul>
        </div>

        {/* Explore */}
        <div style={{ flex: '1 1 200px', margin: '10px' }}>
          <h2>Explore the Gazette</h2>
          <ul>
            <li>Events</li>
            <li>Article archive</li>
            <li>About us</li>
            <li>News+</li>
            <li>Podcast</li>
          </ul>
        </div>

        {/* Series */}
        <div style={{ flex: '1 1 300px', margin: '10px' }}>
          <h2>
            <span role="img" aria-label="book">📖</span> Our recent series
          </h2>
          <div style={{ marginTop: '10px' }}>
            <h3>Wondering</h3>
            <p>A series of random questions answered by Harvard experts.</p>
          </div>
          <div style={{ marginTop: '10px' }}>
            <h3>Life | Work</h3>
            <p>A series focused on the personal side of Harvard research and teaching.</p>
          </div>
        </div>
          <div
  style={{
    flex: '1 1 200px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column', // Ensures the heading and list are stacked vertically
  }}
>
  <h2>Follow us on</h2>
  <ul
    style={{
      listStyle: 'none',
      padding: 0,
      display: 'flex', // Makes the list items align horizontally
      gap: '20px', // Adds spacing between the items
      alignItems: 'center', // Aligns items vertically in the center
    }}
  >
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaInstagram /> Instagram
    </li>
    {/* <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaTiktok /> TikTok
    </li> */}
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaYoutube /> YouTube
    </li>
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaLinkedin /> LinkedIn
    </li>
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaFacebook /> Facebook
    </li>
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaEnvelope /> Email
    </li>
  </ul>
</div>
        </div>
        <p>&copy; {new Date().getFullYear()} Blognest. All rights reserved.</p>  
    </footer>
  );
};

export default Footer;
