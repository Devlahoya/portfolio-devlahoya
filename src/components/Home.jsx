import React from 'react';
import me2 from "../assets/me/me2.png";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {useTranslation} from "react-i18next";
const Home = () => {
  const [t] =useTranslation("global");
  return (
    <section
      id="home"
      className="min-h-screen flex py-20 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={me2} alt="" className="md:w-7/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              {t("home.hello")}
              <br />
            </span>
            {t("home.mynameis")} <span>Hector Martinez</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Trainee Developer
          </h4>
          <div className='flex flex-auto gap-8'>
          <Link to="contact">
          <button className="btn-primary mt-8 text-white group border-2  my-2 flex items-center 
          hover:bg-pink-600 hover:border-pink-600">{t("home.contact-me")}</button>
          </Link>
          <Link to='work'>
          <button className=' btn-primary mt-8 text-white group border-2 px-10 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          {t("home.view-work")}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
          </div>
        </div>
      </div>
    </section>

        
  );
};

export default Home;
