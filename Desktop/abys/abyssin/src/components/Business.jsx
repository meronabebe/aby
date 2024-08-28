import { features } from "../constants";
import styles, { layout } from "../style";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col sm:flex-row p-6 rounded-[20px] bg-black-gradient ${index !== features.length - 1 ? "mb-6" : "mb-0"} transform hover:scale-105 hover:shadow-lg hover:bg-dimBlue`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-black-gradient`}>
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col mt-4 sm:mt-0 sm:ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features1" className={`${layout.section}`}>
    <div className="flex flex-col md:flex-row md:space-x-6">
      <div className="flex-1 flex flex-col space-y-6">
        {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <div className="flex-1 flex flex-col space-y-6 mt-6 md:mt-0">
        {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index + Math.ceil(features.length / 2)} />
        ))}
      </div>
    </div>
    {/* <Button styles={`mt-10`} />  */}
    <br></br><br></br>
  </section> 
  
);

export default Business;
