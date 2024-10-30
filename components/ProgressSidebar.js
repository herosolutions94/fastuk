import React from 'react';

export default function ProgressSidebar({ currentStep }) {
    const steps = [
        { label: "Parcel Details", description: "Enter Your Detail Here" },
        { label: "Select Vehicle", description: "Enter Your Detail Here" },
        { label: "Shipment Details", description: "Enter Your Detail Here" },
        { label: "Via’s Details", description: "Enter Your Detail Here" },
        { label: "Overview", description: "Enter Your Detail Here" },
        { label: "Agreement", description: "Enter Your Detail Here" },
        { label: "Checkout", description: "Enter Your Detail Here" },
      ];

  return (
    <div className="sidebar">
    <ul className="steps">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${currentStep === index + 1 ? 'active' : ''} ${currentStep > index + 1 ? 'completed' : ''}`}
        >
          <div className="circle">
            {currentStep > index + 1 ? "✓ " : index + 1}
          </div>
          <div className="text">
            <span className="label">{step.label}</span>
            <span className="description">{step.description}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}
