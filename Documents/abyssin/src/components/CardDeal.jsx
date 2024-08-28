import React, { useState } from 'react';
import styles, { layout } from "../style";

const CardDeal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How is your Pricing ?',
      answer: 'Our pricing is competitive and transparent. We offer various packages to suit different needs.'
    },
    {
      question: 'Where We Got Your address?',
      answer: 'We collected your address during registration or through your subscription preferences.'
    },
    {
      question: 'Do you have warranty?',
      answer: 'Yes, we offer a warranty for all our products. Please check the terms and conditions for more details.'
    },
    {
      question: 'What about security of your product?',
      answer: 'Our products are secured with the latest encryption technology to protect your data and privacy.'
    }
  ];

  return (
    <section id="carddeal" >
      <div className={layout.sectionInfo}>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          FAQs
        </p>
        <h2 className={styles.heading2}>
          Get the Answers to Common Questions
        </h2>
      </div>
      
      <div className="faq-list mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-4 p-4 bg-blue-gradient rounded-lg cursor-pointer">
            <div className="faq-question flex justify-between items-center" onClick={() => toggleFAQ(index)}>
              <h3 className="text-lg font-medium ">{faq.question}</h3>
              <span>{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer mt-5 text-sm text-gray-700 ">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardDeal;
