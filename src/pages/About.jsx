import React from 'react';
import ebdollah from "../assets/ebdollah.jpg";

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <h1 className="text-4xl font-bold mb-4 md:text-6xl">About me</h1>
          <div className="flex flex-col items-center mb-10">
            <img className="rounded-lg w-48 md:w-64 mb-4" src={ebdollah} alt="Ebdollah" />
            <p className="rounded-lg w-full max-w-md bg-white shadow-md p-4 md:p-8 text-sm md:text-base">
              I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own. I'm proud to have collaborated with some awesome companies. I value simple content structure, clean design patterns, and thoughtful interactions. I like to code things from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
