import { useState } from 'react';
// import upArrow from '/public/images/up.svg';
// import downArrow from '/public/images/down.svg';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a 'Dedicated' delivery?",
      answer:
        "This means the vehicle and driver is fully dedicated to your consignment only, no co-loading with anything or anyone else's load. The consignment will be collected and delivered direct (ASAP) to the delivery destination.",
    },
    {
      question: "Do you do overnights, next day or 2-3 day delivery service?",
      answer:
        "Yes, we offer overnight, next day, and 2-3 day delivery services based on your needs and location.",
    },
    {
      question: "Do you have insurance and what is your insurance cover?",
      answer:
        "Yes, we have insurance that covers the full value of your goods during transit. Our insurance protects against damage, theft, and loss.",
    },
    {
      question: "Do you deliver to Europe and do you handle customs?",
      answer:
        "Yes, we deliver to Europe and handle all customs processes to ensure a smooth delivery experience.",
    },
    {
      question: "Do you do pallet delivery?",
      answer: "Yes, we offer pallet delivery for large consignments and bulk goods.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqSection">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faqItem ${activeIndex === index ? 'active' : ''}`}
        >
          <div className="question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="icon">
              <img
               src={activeIndex === index ? '/images/up.svg' : '/images/down.svg'}
              />
            </span>
          </div>
          {activeIndex === index && (
            <div className="answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
