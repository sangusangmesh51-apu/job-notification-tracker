import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();

  const handleStartTracking = () => {
    navigate("/settings");
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-headline">Stop Missing The Right Jobs.</h1>
        <p className="landing-subtext">
          Precision-matched job discovery delivered daily at 9AM.
        </p>
        <div className="landing-cta">
          <PrimaryButton onClick={handleStartTracking}>
            Start Tracking
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
