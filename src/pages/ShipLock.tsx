import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Button";
import { getTestStatus, areAllTestsPassed, getPassedCount } from "../utils/testChecklist";

export const ShipLock = () => {
  const [allTestsPassed, setAllTestsPassed] = useState(false);
  const [passedCount, setPassedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const items = getTestStatus();
    setAllTestsPassed(areAllTestsPassed(items));
    setPassedCount(getPassedCount(items));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="page-container">
        <h1 className="page-heading">Ship</h1>
        <p className="page-subtext">Checking test status...</p>
      </div>
    );
  }

  // Locked state: Not all tests passed
  if (!allTestsPassed) {
    return (
      <div className="page-container">
        <h1 className="page-heading">Ship</h1>
        
        <div className="ship-lock">
          <div className="ship-lock__icon">🔒</div>
          <h2 className="ship-lock__title">Complete all tests before shipping.</h2>
          <p className="ship-lock__message">
            You have completed {passedCount} of 10 required tests.
          </p>
          <p className="ship-lock__subtext">
            Go to the Test Checklist and verify all functionality before proceeding.
          </p>
          <Link to="/jt/07-test">
            <PrimaryButton>Go to Test Checklist</PrimaryButton>
          </Link>
        </div>
      </div>
    );
  }

  // Unlocked state: All tests passed
  return (
    <div className="page-container">
      <h1 className="page-heading">Ship</h1>
      
      <div className="ship-unlocked">
        <div className="ship-unlocked__icon">🚀</div>
        <h2 className="ship-unlocked__title">Ready to Ship!</h2>
        <p className="ship-unlocked__message">
          All 10 tests have been passed. The application is ready for deployment.
        </p>
        <div className="ship-unlocked__checklist">
          <h3>Completed Tests:</h3>
          <ul>
            <li>✓ Preferences persist after refresh</li>
            <li>✓ Match score calculates correctly</li>
            <li>✓ "Show only matches" toggle works</li>
            <li>✓ Save job persists after refresh</li>
            <li>✓ Apply opens in new tab</li>
            <li>✓ Status update persists after refresh</li>
            <li>✓ Status filter works correctly</li>
            <li>✓ Digest generates top 10 by score</li>
            <li>✓ Digest persists for the day</li>
            <li>✓ No console errors on main pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
