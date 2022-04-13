import React from "react";
import FilterListToggle from "../../common/FilterListToggle/FilterListToggle";
import { categoryList } from "../../../constants/contants";
import "./styles.css";
import CheckboxProton from "../../common/CheckboxProton/CheckboxProton";

function FilterPanel({
  selectedCategory,
  selectCategory,
  cuisines,
  changeChecked,
}) {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>

      {/* Cusines */}
      <div className="input-group">
        <p className="label">Generator Type</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* Price Range*/}
    </div>
  );
}

export default FilterPanel;
