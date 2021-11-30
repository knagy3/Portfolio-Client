import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.school} data-aos="zoom-out-left" data-aos-duration="1500">
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    var mainSkills = data.skills.slice(0,4).map(function (skills) {
      return (
        <div key={skills.name} className="flex items-center space-x-3">
          <img src={skills.icon} alt={skills.level} className="w-14 object-contain" />
          <div className="w-full bg-gray-200 h-6 rounded-xl">
            <div className="bg-secondary h-auto leading-none py-1 text-center text-white rounded-xl text-lg" style={{ width: skills.level }}>{skills.level}</div>
          </div>
        </div>
      );
    });

    //others
    var otherSkills = data.skills.slice(4,50).map(function (skills) {
      return (
        <div key={skills.name} className="flex flex-col space-x-3">
          <img src={skills.icon} alt={skills.level} className="w-16 object-contain" />
        </div>
      );
    });


  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1 data-aos="zoom-out-right" data-aos-duration="1500">
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col bg-white p-12 box-border rounded-xl shadow-xl">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row skill ">
        <div className="three columns header-col">
          <h1 data-aos="zoom-out-right" data-aos-duration="1500">
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col bg-white p-12 box-border rounded-xl shadow-xl">
          <div className="bars mb-9">
            <ul className="flex flex-col space-y-5">{mainSkills}</ul>
          </div>

          <h1>
            <span>Other skills</span>
          </h1>

          <div className=" my-10">
            <ul className="flex items-center space-x-6">{otherSkills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
