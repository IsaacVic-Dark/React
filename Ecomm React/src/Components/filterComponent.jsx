import React from 'react';

const FilterComponent = ({ searchTerm, onSearchTermChange, selectedCategories, onCategoryChange }) => {
    const categories = ['Electronics', 'Cleaning', 'Food'];

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
            />
            <div>
                {categories.map((category) => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => onCategoryChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterComponent;
