import styles from "../style";

import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
       
        <p className={`${styles.paragraph} mt-4 max-w-[312px] mb-10 text-gradient font-bold text-lg`}>
          Abyssinia software solution </p>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Newsletter Section */}
        <div className="space-y-4 text-white">
          <h4 className="font-bold text-xl">Newsletter</h4>
          <p>Subscribe to our newsletter for updates.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg outline-none"
            />
            <button className="bg-[#00bfff] text-white px-4 py-2 rounded-r-lg">
              SignUp
            </button>
          </form>
        </div>
        
        {/* Explore Section */}
        <div className="space-y-4 text-white">
          <h4 className="font-bold text-xl">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/services" className="hover:text-gray-400">Our Services</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Info Section */}
        <div className="space-y-4 text-white">
          <h4 className="font-bold text-xl">Contact Info</h4>
          <p className="flex items-start space-x-2">
          <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
    </svg>
            <span>
              Address: Addis Ababa, Bole Wollo Sefer,<br />
              Gorgoriwos Adebabay infront of Tsedey Bank 242 Building 4th floor
            </span>
          </p>
          <p className="flex items-center space-x-2">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.1 15.1 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.45 2.33.69 3.54.69a1 1 0 011 1v3.5a1 1 0 01-1 1C8.93 21 3 15.07 3 8a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.24 2.42.69 3.54.11.26.04.55-.24 1.05l-2.2 2.2z"/>
    </svg>
      
            <span>Phone: <a href="tel:0940637672" className="text-blue-400">0940637672, 0951050364</a></span>
          </p>
          <p className="flex items-center space-x-2">

          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16v.01L12 13 4 6.01V6zm0 12V8.54l7.06 5.93a1 1 0 001.27 0L20 8.54V18H4z"/>
    </svg>
   
            <span>Email: <a href="mailto:abyssiniasoftware1@gmail.com" className="text-blue-400">abyssiniasoftware1@gmail.com</a></span>
          </p>
        </div>
        
        {/* Subscription Section */}
        <div className="space-y-4 text-white">
          <h4 className="font-bold text-xl">Subscription</h4>
          <p>
            Subscribe to our SAS service to get business software at a low price with free upgrading, technical support, free training, and free maintenance.
          </p>
        </div>
        
      </div>
      </div>
      

      </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Abyssinia Software solution. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
