import { useState } from 'react';
import me1 from "../assets/me/me1.png";
import {MoreAboutMe} from './MoreAboutMe';
import Skills from './Skills';
import {FadeIn, FadeOut} from "./Fade";
import {useTranslation} from "react-i18next";
import CV from "../assets/CV.pdf";
const About = () => {
  const [t] =useTranslation("global");
  const info = [
    { text: `${t("about.years")}`, count: "01" },
    { text: `${t("about.completed-projects")}`, count: "5" },
    { text: `${t("about.optimistic")}`, count: "100 %" },
  ];
  const [show, setShow] = useState(false);

  return (
    <section id="about" className="mt-10 py-20 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
        {t("about.about")} <span className="text-cyan-600">{t("about.me")}</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">{t("about.myintroduction")}</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              {t("about.textaboutme")}
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-cyan-600">
                      {content.count}
                    </h3>
                    <p className="md:text-base text-xs">{t(content.text)}</p>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div className='flex flex-auto gap-8'>
              <a href={CV} target="__blank">
                <button className="btn-primary mt-8 text-white group border-2  my-2
              hover:bg-pink-600 hover:border-pink-600">{t("about.cv")}</button>
              </a>
                  <button
                  type="button"
                  onClick={() => {
                  setShow(!show);
                  }} 
                className="btn-primary mt-8 text-white group border-2  my-2 
                hover:bg-pink-600 hover:border-pink-600">{t("about.moreaboutme")}</button>
              </div>                    
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full  ">
              <img
                src={me1}
                alt=""
                className="z-10 w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {show ? (<FadeIn> <MoreAboutMe/> </FadeIn>) 
                :(<FadeOut><Skills/></FadeOut>) }
      
    </section>
  );
};

export default About;
