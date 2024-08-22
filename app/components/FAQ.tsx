"use client"; // Ensure this component runs on the client-side

import { useState } from "react";

const faqItems = [
  {
    question:
      "How does your software developer company ensure product security?",
    answer:
      "We ensure product security by following industry best practices...",
  },
  {
    question: "What standards, laws, and regulations do you comply with?",
    answer:
      "A secure development process requires compliance with applicable standards, laws, and regulations. As a software developer firm, Yalantis creates software solutions for clients in various countries and industries. While building solutions for the healthcare industry, for example, we follow HIPAA, CFR, GDPR, FHIR, and HL7 requirements. We have also helped our clients obtain ONC Health IT certification. While delivering projects for the FinTech industry, we comply with PCI-DSS, PSD2, SOC2, and the GDPR.We comply with HIPAA, CFR, GDPR, FHIR, and HL7 requirements...",
  },
  {
    question:
      "What industries does your software product development company have experience in?",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },
  {
    question:
      "What benefits do you get as a result of Yalantis’ domain experience",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },
  {
    question: "What expertise does your development software company have?",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },
  {
    question:
      "What does the software development life cycle look like in your IT software development company?",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },

  {
    question:
      "How does your software building company ensure software quality?",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },
  {
    question:
      "What do Yalantis project managers do to improve development efficiency?",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },
  {
    question: "How do you handle project constraints?",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },
  {
    question: "Why is Yalantis a trustworthy software engineering company?",
    answer:
      "We have experience in healthcare, FinTech, and many other industries...",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2 max-w-4xl mx-auto mt-6">
      {faqItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleFAQ(index)}
            className="group w-full text-left py-4 px-6 bg-white focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg pr-16">{item.question}</span>
              <span
                className={`${
                  openIndex === index ? "text-primary-color" : ""
                } group-hover:text-primary-color text-2xl`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div className="py-4 px-6 bg-transparent text-sm">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
