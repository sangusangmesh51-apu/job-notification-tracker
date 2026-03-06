import { useState, useEffect } from "react";
import { SecondaryButton } from "../components/Button";
import {
  TestItem,
  getTestStatus,
  saveTestStatus,
  toggleTestItem,
  getPassedCount,
  areAllTestsPassed,
  resetTestStatus,
} from "../utils/testChecklist";

export const TestChecklist = () => {
  const [testItems, setTestItems] = useState<TestItem[]>([]);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  useEffect(() => {
    setTestItems(getTestStatus());
  }, []);

  const handleToggle = (id: string) => {
    const updated = toggleTestItem(testItems, id);
    setTestItems(updated);
    saveTestStatus(updated);
  };

  const handleReset = () => {
    if (window.confirm("Reset all test statuses? This cannot be undone.")) {
      const reset = resetTestStatus();
      setTestItems(reset);
    }
  };

  const passedCount = getPassedCount(testItems);
  const allPassed = areAllTestsPassed(testItems);
  const totalCount = testItems.length;

  return (
    <div className="page-container">
      <h1 className="page-heading">Test Checklist</h1>
      <p className="page-subtext">
        Verify all functionality before shipping. Check each item after testing.
      </p>

      {/* Test Summary */}
      <div className="test-summary">
        <div className="test-summary__score">
          <span className="test-summary__label">Tests Passed:</span>
          <span className="test-summary__value">
            {passedCount} / {totalCount}
          </span>
        </div>
        {!allPassed && (
          <div className="test-summary__warning">
            Resolve all issues before shipping.
          </div>
        )}
        {allPassed && (
          <div className="test-summary__success">
            All tests passed! Ready to ship.
          </div>
        )}
      </div>

      {/* Checklist */}
      <div className="test-checklist">
        {testItems.map((item) => (
          <div key={item.id} className="test-checklist__item">
            <label className="test-checklist__label">
              <input
                type="checkbox"
                className="test-checklist__checkbox"
                checked={item.checked}
                onChange={() => handleToggle(item.id)}
              />
              <span
                className={`test-checklist__text ${
                  item.checked ? "test-checklist__text--checked" : ""
                }`}
              >
                {item.label}
              </span>
            </label>
            <div className="test-checklist__tooltip-wrapper">
              <button
                className="test-checklist__tooltip-trigger"
                onMouseEnter={() => setHoveredTooltip(item.id)}
                onMouseLeave={() => setHoveredTooltip(null)}
                onClick={() =>
                  setHoveredTooltip(hoveredTooltip === item.id ? null : item.id)
                }
              >
                How to test
              </button>
              {hoveredTooltip === item.id && (
                <div className="test-checklist__tooltip">{item.tooltip}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <div className="test-checklist__actions">
        <SecondaryButton onClick={handleReset}>Reset Test Status</SecondaryButton>
      </div>
    </div>
  );
};
