import { WorkMode, ExperienceLevel, JobSource } from "../data/jobs";
import { JobStatus } from "../utils/jobStatus";

export interface FilterState {
  keyword: string;
  location: string;
  mode: WorkMode | "";
  experience: ExperienceLevel | "";
  source: JobSource | "";
  status: JobStatus | "All";
  sort: "latest" | "salary" | "experience" | "matchScore";
}

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  locations: string[];
}

export const FilterBar = ({ filters, onFilterChange, locations }: FilterBarProps) => {
  const handleChange = (field: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <div className="filter-bar">
      <div className="filter-row">
        <div className="filter-group filter-group--keyword">
          <label className="filter-label">Search</label>
          <input
            type="text"
            className="filter-input"
            placeholder="Job title or company..."
            value={filters.keyword}
            onChange={(e) => handleChange("keyword", e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label className="filter-label">Location</label>
          <select
            className="filter-select"
            value={filters.location}
            onChange={(e) => handleChange("location", e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Mode</label>
          <select
            className="filter-select"
            value={filters.mode}
            onChange={(e) => handleChange("mode", e.target.value)}
          >
            <option value="">All Modes</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Experience</label>
          <select
            className="filter-select"
            value={filters.experience}
            onChange={(e) => handleChange("experience", e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Fresher">Fresher</option>
            <option value="0-1">0-1 Years</option>
            <option value="1-3">1-3 Years</option>
            <option value="3-5">3-5 Years</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Source</label>
          <select
            className="filter-select"
            value={filters.source}
            onChange={(e) => handleChange("source", e.target.value)}
          >
            <option value="">All Sources</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Naukri">Naukri</option>
            <option value="Indeed">Indeed</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Status</label>
          <select
            className="filter-select"
            value={filters.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="All">All</option>
            <option value="Not Applied">Not Applied</option>
            <option value="Applied">Applied</option>
            <option value="Rejected">Rejected</option>
            <option value="Selected">Selected</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Sort</label>
          <select
            className="filter-select"
            value={filters.sort}
            onChange={(e) => handleChange("sort", e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="matchScore">Match Score</option>
            <option value="salary">Salary</option>
            <option value="experience">Experience</option>
          </select>
        </div>
      </div>
    </div>
  );
};
