"use client";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-bold">Blognest</span>, your go-to platform for sharing ideas, stories, and knowledge. 
          Our mission is to provide a space where creativity and expression thrive, enabling users to connect, inspire, and grow.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Whether you&apos;re a seasoned writer or just starting your blogging journey, Blognest is here to help you hatch your thoughts 
          and share them with the world. Join our community and be part of a growing network of thinkers and creators.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for choosing Blognest. Together, let&apos;s build something amazing!
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-left">
          <li>Creativity and Innovation</li>
          <li>Community and Collaboration</li>
          <li>Integrity and Transparency</li>
          <li>Empowerment and Growth</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;