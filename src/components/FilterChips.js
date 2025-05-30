import React from "react";
import PropTypes from "prop-types";
import "./FilterChips.css";

/**
 * FilterChips - Component for category filtering
 * 
 * @param {Object} props - Component props
 * @param {Array} props.categories - List of category names
 * @param {Array} props.selectedCategories - List of currently selected categories
 * @param {Function} props.onCategoryToggle - Function to call when a category is toggled
 * @returns {JSX.Element} FilterChips component
 */
const FilterChips = ({ categories, selectedCategories, onCategoryToggle }) => {
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

FilterChips.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  onCategoryToggle: PropTypes.func.isRequired
};

export default FilterChips;
