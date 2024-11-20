import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../assets/NewImages/NewLogo.png'; 
import { Link } from 'react-router-dom'; 

const Footer = ({ theme }) => {
  const backgroundColor = theme === "hospital" ? "bg-teal-500" : "bg-violet-900";

  return (
    <div className={`mt-0 pt-9 footer ${backgroundColor}`}>
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px] flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Logo"
              className="w-auto h-29 rounded-md mb-4"
              style={{
                backgroundColor: 'transparent',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
            <p className="text-center md:text-left mt-[18px] text-[15px] font-normal text-white/[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio facere officiis enim animi placeat eaque nesciunt alias beatae id, at dicta.
            </p>
            <div className="mt-[18px] flex gap-4">
              <a className="hover:scale-110" target="_blank" href="#" rel="noopener noreferrer">
                <FaFacebook size={36} style={{ color: "white" }} />
              </a>
              <a className="hover:scale-110" target="_blank" href="#" rel="noopener noreferrer">
                <FaLinkedin size={36} style={{ color: "white" }} />
              </a>
              <a className="hover:scale-110" target="_blank" href="#" rel="noopener noreferrer">
                <FaInstagram size={36} style={{ color: "white" }} />
              </a>
              <a className="hover:scale-110" target="_blank" href="#" rel="noopener noreferrer">
                <FaTwitter size={36} style={{ color: "white" }} />
              </a>
              <a className="hover:scale-110" target="_blank" href="https://www.youtube.com/" rel="noopener noreferrer">
                <FaYoutube size={36} style={{ color: "white" }} />
              </a>
            </div>
          </div>
          <div className="md:w-[316px]">
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... SVG content ... */}
                </svg>
              </div>
              <div className="ml-[18px]">
                <a href="tel:+911800123444" className="font-Inter text-[14px] font-medium text-white">
                +256 784 038591
                </a>
                <p className="font-Inter text-[12px] font-medium text-white">Support Number</p>
              </div>
            </div>
            <div className="mt-[23px] flex">
              {/* ... Email address section ... */}
            </div>
            <div className="mt-[23px] flex">
              {/* ... Address section ... */}
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div className="">
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
              <ul>
                <li className="mt-[15px]">
                  <Link
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {/* ... other list items ... */}
                <li className="mt-[15px]">
                  <Link 
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    to="/terms-and-conditions" 
                  >
                    Terms and conditions
                  </Link> 
                </li>
                {/* ... other list items ... */}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              {/* ... Download the app section ... */}
            </div>
          </div>
        </div>
        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            © Copyright 2024, All Rights Reserved by YOUR WEBSITES. PVT. LTD
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Footer;