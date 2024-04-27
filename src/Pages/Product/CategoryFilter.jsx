import { useState } from "react";
import PropTypes from "prop-types";
const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (event) => {
    const category = event.target.name;

    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );

    onCategoryChange(selectedCategories);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            id={category}
            name={category}
            checked={selectedCategories.includes(category)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};
CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
