import Skills from './Skills';
import {useTranslation} from "react-i18next";
import aboutImg from "../assets/images/about.png";
export const MoreAboutMe = () => {
  const [t] =useTranslation("global");
  return (
    <div name='aboutme' className='mt-10 py-20 text-white relative'>
      {/* Container */}
        <div className="text-center mt-8">
            <h3 className="pb-5 text-4xl font-semibold">
            {t("moreaboutme.more")} <span className="text-cyan-600">{t("moreaboutme.about")}</span> {t("moreaboutme.me")}
            </h3>
            <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="text-gray-300 my-3">
            <p  className="text-justify leading-7 w-11/12 mx-auto">
            {t("moreaboutme.moreabout")}
            </p>
            <h3 className="py-10 text-4xl font-semibold">
            {t("moreaboutme.my")} <span className="text-cyan-600">{t("moreaboutme.hobbies")}</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
            {t("moreaboutme.hobbiedata")}
            </p>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="my-8 lg:w-96 h-full  ">
              <img
                src={aboutImg}
                alt=""
                className="z-10 w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
            </div>
        </div>
        </div>
        <div>
            <p></p>
        </div>
         <Skills/> 
    </div>
    
  );
};

