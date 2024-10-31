import { useState } from "react";
import Link from "next/link";
import ProgressSidebar from "../../components/ProgressSidebar";
import Step1 from "../../components/Step1";
import Step2 from "../../components/Step2";
import Step3 from "../../components/Step3";
import Step4 from "../../components/Step4";
import Step5 from "../../components/Step5";
import Step6 from "../../components/Step6";
import Step7 from "../../components/Step7";

export default function MultistepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 7));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
        return <Step7 />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="contain">
        <div className="login_header">
          <div className="logon_logo">
            <Link href="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <main>

        <section id="multistepform">
          <div className="contain">
            <div className="text">
              <div className="title">Join Us</div>
              <h2>Fast uk couriers limited</h2>
            </div>
            <div className="flex">
              <div className="col1">
                <ProgressSidebar currentStep={currentStep} />
              </div>
              <div className="col2">
                <div className="outer">
                  {renderStep()}
                  <div className="bTn">
                  {currentStep > 1 && (
                    <button className="site_btn color" onClick={handlePrevious}>Previous</button>
                  )}
                  {currentStep < 7 ? (
                    <button className="site_btn" onClick={handleNext}>Next</button>
                  ) : (
                    <button  className="site_btn" onClick={() => alert("Form completed!")}>
                      Submit
                    </button>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
