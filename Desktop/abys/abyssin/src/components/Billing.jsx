
import styles, { layout } from "../style";

import Projects from "./projects";



const Billing = () => (
  <section id="product" >
    

    <div className={layout.sectionInfo}>
    <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
      our projects
    </p>
      <h2 className={styles.heading2}>
     explore our latest projects
      </h2> 
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
      <Projects/>
   
    </div>
  </section>
);

export default Billing;
