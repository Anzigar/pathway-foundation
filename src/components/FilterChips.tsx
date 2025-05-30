import React from "react";
import "./FilterChips.css";

interface FilterChipsProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <div className="filter-chips-container">
      <span className="filter-label">Filter by:</span>
      <div className="filter-chips">
        <button
          className={`filter-chip ${selectedCategories.length === 0 ? "active" : ""}`}
          onClick={() => onCategoryToggle("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${selectedCategories.includes(category) ? "active" : ""}`}
            onClick={() => onCategoryToggle(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterChips;
