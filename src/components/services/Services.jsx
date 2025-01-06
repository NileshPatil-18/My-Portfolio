import React from "react";
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Projects
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
        Here are some of the projects I've worked on, showcasing my skills in modern web development. Each project highlights my expertise in creating responsive, efficient, and user-friendly applications.
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
