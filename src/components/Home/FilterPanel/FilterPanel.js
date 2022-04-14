import React from "react";
import FilterListToggle from "../../common/FilterListToggle/FilterListToggle";
import { categoryList } from "../../../constants/contants";
import "./styles.css";
import CheckboxProton from "../../common/CheckboxProton/CheckboxProton";

function FilterPanel({
  selectedCategory,
  selectCategory,
  generators,
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

      {/* Generator Type */}
      <div className="input-group">
        <p className="label">Generator Type</p>
        {generators.map((generator) => (
          <CheckboxProton
            key={generator.id}
            generator={generator}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* Price Range*/}
    </div>
  );
}

export default FilterPanel;
