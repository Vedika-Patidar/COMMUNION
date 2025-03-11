import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the Communion Application?",
      answer:
        "The Communion Application is a platform designed to connect individuals for spiritual growth, meaningful discussions, and community engagement.",
    },
    {
      question: "How do I sign up for Communion?",
      answer:
        "You can sign up by visiting our website and clicking on the 'Join Now' button. Fill in the required details, and you’re all set!",
    },
    {
      question: "Is the Communion Application free to use?",
      answer:
        "Yes! We offer a free version with basic features. However, premium plans are available for additional benefits.",
    },
    {
      question: "Can I connect with other members?",
      answer:
        "Absolutely! The app allows you to connect with like-minded individuals, join discussions, and participate in events.",
    },
    {
      question: "What kind of events does Communion offer?",
      answer:
        "Communion hosts virtual and in-person events, including spiritual retreats, discussion panels, and mentorship sessions.",
    },
    {
      question: "How can I contact support?",
      answer:
        "If you have any questions, you can reach out to our support team via the ‘Get in Touch’ button below.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-300">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2">
          Everything you need to know about the Communion Application.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mt-8 space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-2">
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer py-3"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-300">
                {faq.question}
              </span>
              <span className="text-gray-400 transition-transform duration-400">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
