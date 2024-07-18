import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = ({ theme }) => {
  const colors = {
    charity: ["#FFCAD7", "#FF7D9D", "#FF3366", "#27272a"],
    hospital: ["#CAD7FF", "#7D9DFF", "#3366FF", "#27272a"],
  };

  const [color1, color2, color3, color4] = colors[theme] || colors.charity;

  return (
    <div className="relative w-full mt-24">
      <div className="w-full absolute bottom-0">
        <svg viewBox="0 0 1425 205.55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d={`M0,17.27l23.75,5.09C47.5,27.38,95,37.57,142.5,39.47s95-4.36,142.5-10.28,95-11.35,142.5-7.4,95,17.43,142.5,24,95,6.25,142.5,5.83,95-.9,142.5-3S950,43,997.5,42.92s95,3.12,142.5,2.88,95-4.11,142.5-3.62,95,5.51,118.75,8L1425,52.62v170.2H0Z`} fill={color1}></path>
            <path d={`M0,94.56l23.75-6.17C47.5,82.22,95,69.89,142.5,65.2s95-1.64,142.5,4.85S380,86.33,427.5,86.5,522.5,77,570,73.59s95-.66,142.5,1.81,95,4.6,142.5,3.78,95-4.6,142.5-6.58,95-1.89,142.5,1.24,95,9.45,142.5,13.15,95,4.85,118.75,5.35l23.75.57V222.82H0Z`} fill={color2}></path>
            <path d={`M0,134,23.75,132C47.5,129.91,95,125.8,142.5,125.39s95,2.88,142.5,5.75,95,5.35,142.5,4,95-6.58,142.5-8.06,95,.66,142.5-.41,95-5.51,142.5-9.21,95-6.66,142.5-5.83,95,5.42,142.5,9.86,95,8.47,142.5,9.05,95-2.47,118.75-4L1425,125v97.84H0Z`} fill={color3}></path>
            <path d={`M0,178.42l23.75-1.64c23.75-1.65,71.25-4.94,118.75-5.59s95,1.23,142.5,2.71,95,2.63,142.5,4.11,95,3.45,142.5,2.88,95-3.54,142.5-8.8,95-12.58,142.5-13.57,95,4.53,142.5,8.23,95,5.67,142.5,4,95-6.91,142.5-9.79,95-3.37,118.75-3.7L1425,157v65.78H0Z`} fill={color4}></path>
          </g>
          <defs>
            <clipPath id="clip0"><rect width="1425" height="444" fill="white"></rect></clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 w-full mt-24 bg-transparent text-gray-300 py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} className="py-1 text-gray-500 hover:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 mr-4 rounded-md mb-4"
                type="email"
                placeholder="Enter email.."
              />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">2024 Great Ormond Street Hospital. All rights reserved</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            {items.map((x, index) => (
              <a key={index} href={x.link} className="hover:text-white">
                <x.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
