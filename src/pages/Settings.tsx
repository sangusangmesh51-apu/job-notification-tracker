import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/Button";
import {
  UserPreferences,
  getPreferences,
  savePreferences,
  DEFAULT_PREFERENCES,
} from "../utils/preferences";
import { getUniqueLocations } from "../data/jobs";

export const Settings = () => {
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [saved, setSaved] = useState(false);

  const locations = getUniqueLocations();

  useEffect(() => {
    const stored = getPreferences();
    setPreferences(stored);
  }, []);

  const handleChange = <K extends keyof UserPreferences>(
    field: K,
    value: UserPreferences[K]
  ) => {
    setPreferences((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleLocationToggle = (location: string) => {
    setPreferences((prev) => {
      const current = prev.preferredLocations;
      const updated = current.includes(location)
        ? current.filter((l) => l !== location)
        : [...current, location];
      return { ...prev, preferredLocations: updated };
    });
    setSaved(false);
  };

  const handleModeToggle = (mode: "Remote" | "Hybrid" | "Onsite") => {
    setPreferences((prev) => {
      const current = prev.preferredMode;
      const updated = current.includes(mode)
        ? current.filter((m) => m !== mode)
        : [...current, mode];
      return { ...prev, preferredMode: updated };
    });
    setSaved(false);
  };

  const handleSave = () => {
    savePreferences(preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="page-container">
      <h1 className="page-heading">Settings</h1>
      <p className="page-subtext">
        Configure your job preferences. These settings will be used to match you with relevant opportunities.
      </p>

      <div className="settings-form">
        <Card>
          <div className="stack-24">
            {/* Role Keywords */}
            <section className="stack-16">
              <h2 className="ds-subheading">Role Preferences</h2>
              <Input
                label="Role keywords"
                placeholder="e.g., Software Engineer, Product Manager"
                helperText="Enter job titles or keywords separated by commas"
                value={preferences.roleKeywords}
                onChange={(e) => handleChange("roleKeywords", e.target.value)}
              />
            </section>

            {/* Preferred Locations - Multi-select */}
            <section className="stack-16">
              <h2 className="ds-subheading">Preferred Locations</h2>
              <p className="settings-helper">Select one or more cities</p>
              <div className="checkbox-group">
                {locations.map((location) => (
                  <label key={location} className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={preferences.preferredLocations.includes(location)}
                      onChange={() => handleLocationToggle(location)}
                    />
                    <span>{location}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Preferred Mode - Checkboxes */}
            <section className="stack-16">
              <h2 className="ds-subheading">Preferred Work Mode</h2>
              <p className="settings-helper">Select all that apply</p>
              <div className="checkbox-group">
                {["Remote", "Hybrid", "Onsite"].map((mode) => (
                  <label key={mode} className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={preferences.preferredMode.includes(mode as "Remote" | "Hybrid" | "Onsite")}
                      onChange={() => handleModeToggle(mode as "Remote" | "Hybrid" | "Onsite")}
                    />
                    <span>{mode}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Experience Level - Dropdown */}
            <section className="stack-16">
              <h2 className="ds-subheading">Experience Level</h2>
              <select
                className="settings-select"
                value={preferences.experienceLevel}
                onChange={(e) => handleChange("experienceLevel", e.target.value as "Fresher" | "0-1" | "1-3" | "3-5" | "")}
              >
                <option value="">Select experience level</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1">0-1 Years</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
              </select>
            </section>

            {/* Skills */}
            <section className="stack-16">
              <h2 className="ds-subheading">Your Skills</h2>
              <Input
                label="Skills"
                placeholder="e.g., Java, React, Python, SQL"
                helperText="Enter your skills separated by commas"
                value={preferences.skills}
                onChange={(e) => handleChange("skills", e.target.value)}
              />
            </section>

            {/* Min Match Score - Slider */}
            <section className="stack-16">
              <h2 className="ds-subheading">Minimum Match Score</h2>
              <p className="settings-helper">
                Only show jobs with match score above: {preferences.minMatchScore}%
              </p>
              <input
                type="range"
                min="0"
                max="100"
                value={preferences.minMatchScore}
                onChange={(e) => handleChange("minMatchScore", parseInt(e.target.value))}
                className="settings-slider"
              />
              <div className="slider-labels">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </section>

            {/* Save Button */}
            <div className="settings-actions">
              <PrimaryButton onClick={handleSave}>
                {saved ? "Saved!" : "Save Preferences"}
              </PrimaryButton>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
