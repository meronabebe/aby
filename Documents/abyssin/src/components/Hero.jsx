import styles from "../style";
import { may3 } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`relative flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Blurred Background Image */}
      <div className="absolute top-[80px] left-0 right-0 bottom-0 z-0">
    <img src={may3} alt="background" className="w-full h-full object-cover filter blur-sm opacity-50" />
  </div>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-10`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Leading <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Technology Solution</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Provider.
        </h1>
        
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative z-10`}>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We provide web and website development,
          mobile app development,
          Software as service SAS,
          general technology consulting,
          Software development training,
          Software security testing.
        </p>
      </div>

 
    </section>
  );
};

export default Hero;

