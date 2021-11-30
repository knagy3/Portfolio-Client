import React from "react";
import { BsDiscord, BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const About = ({ data}) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="about" style={{ background:"#f4f4fa"}}>
      <div className="row p-9">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Abtahi's Profile Pic"
            data-aos="zoom-out-right" data-aos-duration="1500"
          />
        </div>
        <div className="bg-white p-12 box-border rounded-xl shadow-xl nine columns main-col" data-aos="zoom-out-left" data-aos-duration="1500">
          <h1>
            <span>About Me</span>
          </h1>

          <p className="text-justify my-6">{bio}</p>
          <div className="row ">
            <div className="columns contact-details mt-6">
              <h1>
                <span>Contact Details</span>
              </h1>
              <p className="address my-6">
                <span>{name}</span>
                <br />
                <span>{email}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  {city} {state}, {zip}
                </span>
              </p>
            </div>
            <div className="columns mt-6">
              <h1>
                <span>Connect with me</span>
              </h1>
              <div className="flex items-center space-x-4 justify-start lg:justify-end  mt-12">
                <a href="http://www.facebook.com/abtahnoorsm" target="_blank" rel="noopener noreferrer"><BsFacebook className="text-gray-500 text-5xl hover:text-red-500 transition duration-200" /></a>
                <a href="http://www.instagram.com/smabtahinoor" target="_blank" rel="noopener noreferrer"><BsInstagram className="text-gray-500 text-5xl hover:text-red-500 transition duration-200" /></a>
                <a href="http://www.linkedin.com/in/smabtahinoor" target="_blank" rel="noopener noreferrer"><BsLinkedin className="text-gray-500 text-5xl hover:text-red-500 transition duration-200" /></a>
                <a href="http://www.github.com/19smabtahinoor" target="_blank" rel="noopener noreferrer"><BsGithub className="text-gray-500 text-5xl hover:text-red-500 transition duration-200" /></a>
                <a href="https://discordapp.com/users/768808881425612811" target="_blank" rel="noopener noreferrer"><BsDiscord className="text-gray-500 text-5xl hover:text-red-500 transition duration-200" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// 100 = 5